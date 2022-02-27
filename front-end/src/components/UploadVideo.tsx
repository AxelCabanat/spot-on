import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useOutletContext } from 'react-router-dom';

import { StudioOutletContext, Category } from '../interfaces';
import Label from './Label';
import FormRow from './FormRow';
import { fetchUploadVideo } from '../services/Api';
import { notifSuccess, notifFail } from '../services/notifications';

interface Props {
	categories: Category[];
	OnCreated: () => void;
}

const UploadVideo = ({ categories, OnCreated }: Props) => {
	const { studio }: StudioOutletContext = useOutletContext();
	const studioId = studio.id.toString();

	const { register, handleSubmit, formState: { errors } } = useForm();

	async function onSubmit(data: any) {
		try {
			const formData = new FormData();
			formData.append('title', data.title);
			formData.append('video', data.video[0]);
			formData.append('category', data.category);
			formData.append('miniature', data.miniature[0]);
			formData.append('id', studioId);

			await fetchUploadVideo(formData);
			OnCreated();
			notifSuccess(`La video "${data.title}" est envoyée`);
		} catch (e) {
			notifFail('Envoi échoué');
			console.log(e.response.data);
		}
	}

	return (
		<div>
			<form
				className=" sm:rounded-md sm:overflow-hidden px-4 py-5 sm:p-6"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormRow>
					<Label htmlFor="title">Titre</Label>
					<input
						{...register('title', {
							required: true,
							minLength: {
								value: 3,
								message: 'minimum 3 caractères'
							}
						})}
						id="title"
						className="studio-inputs w-1/4"
					/>
					<ErrorMessage
						errors={errors}
						name="title"
						render={({ message }) => <p className="text-red-800">{message}</p>}
					/>
				</FormRow>

				<FormRow>
					<Label htmlFor="video">Video</Label>
					<input
						{...register('video', {
							required: true
						})}
						type="file"
						id="video"
						className="studio-inputs w-1/4"
					/>
				</FormRow>

				<FormRow>
					<Label htmlFor="category">Categories</Label>

					<select
						{...register('category', { required: true })}
						id="category"
						className="mt-1 focus:ring-indigo-500 text-gray-700 focus:border-indigo-500 block w-1/3 shadow-sm sm:text-sm border-gray-300 bg-gray-100 rounded-md"
					>
						{categories.map((category, id) => {
							return (
								<option key={id} value={category.id}>
									{category.label}
								</option>
							);
						})}
					</select>
				</FormRow>

				<FormRow>
					<Label htmlFor="miniature">Miniature</Label>
					<input
						{...register('miniature', {
							required: true
						})}
						type="file"
						id="miniature"
						className="studio-inputs w-1/4"
					/>
				</FormRow>

				<div className="px-4 py-3 text-right sm:px-6">
					<button
						type="submit"
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Envoyer
					</button>
				</div>
			</form>
		</div>
	);
};

export default UploadVideo;
