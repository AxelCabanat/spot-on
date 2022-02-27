import React, { Component } from "react";
import { Link } from "react-router-dom";

class LiveStudioComponent extends Component {
  domain = "meet.jit.si";
  api = {};

  constructor(props) {
    super(props);

    this.state = {
      user: props.user || "unknown",
      studio: props.studio || "no-studio",
      studioBackground: props.studioBackground || "no-background",
      isAudioMuted: false,
      isVideoMuted: false,
    };
  }

  startMeet = () => {
    const options = {
      roomName: this.props.roomName || "no-name",
      width: "100%",
      height: 800,
      configOverwrite: { prejoinPageEnabled: false },
      interfaceConfigOverwrite: {
        // overwrite interface properties
      },
      parentNode: document.querySelector("#jitsi-iframe"),
      userInfo: {
        displayName: this.state.user,
      },
    };
    this.api = new window.JitsiMeetExternalAPI(this.domain, options);

    this.api.addEventListeners({
      videoConferenceLeft: this.handleVideoConferenceLeft,
    });
  };

  handleVideoConferenceLeft = () => {
    console.log("handleVideoConferenceLeft");
    this.props.onConferenceLeft && this.props.onConferenceLeft();
  };

  // custom events
  executeCommand(command) {
    this.api.executeCommand(command);

    if (command == "hangup") {
      return this.props.history.push("/thank-you");
    }

    if (command == "toggleAudio") {
      this.setState({ isAudioMuted: !this.state.isAudioMuted });
    }

    if (command == "toggleVideo") {
      this.setState({ isVideoMuted: !this.state.isVideoMuted });
    }
  }

  componentDidMount() {
    if (window.JitsiMeetExternalAPI) {
      this.startMeet();
    } else {
      alert("JitsiMeetExternalAPI not loaded");
    }
  }

  render() {
    const { user, studio, studioBackground, isAudioMuted, isVideoMuted } =
      this.state;

    return (
      <div className={`h-screen w-screen bg-[${studioBackground}]`}>
        {/* <div className="red-banner w-full">
          <Link to={`/studios/${studio}`} className="banner-red w-full">
            Revenir sur le {studio}
          </Link>
        </div> */}

        <div id="jitsi-iframe" />
        <div className="banner-red w-full">
          <Link to={`/studios/${studio}`} className="banner-red w-full">
            Revenir sur le {studio}
          </Link>
        </div>
      </div>
    );
  }
}

export default LiveStudioComponent;
