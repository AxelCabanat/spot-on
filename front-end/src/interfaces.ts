export interface Studio {
	id: number;
	logo: string;
	name: string;
	banner?: string;
	background?: string;
	background2?: string;
	background_secondary?: string;
	color_primary?: string;
	color_secondary?: string;
	typo?: string;
	main_title?: string;
	main_description?: string;
	title1?: string;
	description1?: string;
	url1?: string;
	title2?: string;
	description2?: string;
	url2?: string;
	title3?: string;
	description3?: string;
	url3?: string;
	title4?: string;
	description4?: string;
	url4?: string;
	title5?: string;
	description5?: string;
	url5?: string;
	is_on_stream?: boolean;
	stream_url?: string;
	username?: string;
}

export interface StudioOutletContext {
	studio: Studio;
	setStudio: (studio: Studio) => {};
	isText: boolean;
	setIsText: Function;
}

export interface ContextStudioState {
	id: number | null;
	logo: string | null;
	name: string | null;
	banner: string | null;
	background: string | null;
	background2: string;
	background_secondary: string;
	color_primary: string | null;
	color_secondary: string | null;
	typo: string | null;
}

export interface ContextUserState {
	id: number | null;
	usernname: string | null;
	email: string | null;
	password: string | null;
	role: string | null;
	created_at: Date | null;
	avatar: string | null;
	firstname: string | null;
	lastname: string | null;
	adresse: string | null;
	postal_code: string | null;
	city: string | null;
	country: string | null;
	phone: number | null;
}

export interface Reponse {
	id: number;
	content: string;
	questionId: number;
}
export interface Question {
	id: number;
	content: string;
	type: number;
	surveyId: number;
	responses: Reponse[];
}
export interface Survey {
	id: number;
	name: string;
	questions: Question[];
}

export interface SurveyChoiceProps {
	question: Question;
	onChange?: (response: String | number) => void;
}
export interface User {
	id: number;
	username: string;
	email: string;
	role: number;
	created_at: Date;
	avatar?: string;
	firstname?: string;
	lastname?: string;
	adresse?: string;
	postal_code?: string;
	city?: string;
	country?: string;
	phone?: number;
	avatarhttp?: File;
	admin?: Studio[]
}

export interface UserContext {
	user?: User;
	setUser: (user?: User) => void;
}
export interface SocieteContext {
	societe: string;
	setSociete: (societe: string) => void;
}

export interface video {
	id: number;
	created_at: Date;
	title: string;
	url_video: string;
	url_miniature: string;
	id_studio: number;
	category_id?: number;
}

export interface Category {
	id: number;
	id_studio: number;
	label: string;
}
