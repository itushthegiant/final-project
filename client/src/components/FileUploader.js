import React, { Component, useState } from 'react'
import ReactDOM from 'react-dom'
import { API_URL } from '../api/constants'

// Import React FilePond
import { FilePond, registerPlugin, setOptions } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
class FileUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // Set initial files, type 'local' means this is a file
            // that has already been uploaded to the server (see docs)
            //   files: [
            //     {
            //       source: "index.html",
            //       options: {
            //         type: "local"
            //       }
            //     }
            //   ]
        };
    }

    handleInit() {
        console.log("FilePond instance has initialised", this.pond);
    }



    render() {
        return (
            <div className="App">
                <FilePond
                    ref={ref => (this.pond = ref)}
                    files={this.state.files}
                    allowMultiple={true}
                    allowReorder={true}
                    maxFiles={5}
                    server={{
                        url: `${API_URL}`,
                        process: {
                            url: `/jobs/${this.props.newJobId}/upload-images`,
                            method: 'PATCH',
                            withCredentials: true
                        },
                        // revert: `/jobs/${this.props.newJobId}/delete-images`
                    }}
                    name="images"
                    oninit={() => this.handleInit()}
                    onupdatefiles={fileItems => {
                        // Set currently active file objects to this.state
                        this.setState({
                            files: fileItems.map(fileItem => fileItem.file)
                        });
                    }}
                />
            </div>
        );
    }
}
export default FileUploader