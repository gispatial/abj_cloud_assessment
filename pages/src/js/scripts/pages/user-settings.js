/*=========================================================================================
    File Name: user-settings.js
    Description: User Settings jQuery Plugin Intialization
    --------------------------------------------------------------------------------------
    Item Name: abjcloudsolutions.com dashboard management portal
      Author: Justed@Aidy
    Staging URL: http://tripcarte.gispatial.tech/api
  ==========================================================================================*/

// profile picture upload
Dropzone.options.profilePicUpload = {
  paramName: "file", // The name that will be used to transfer the file
  maxFiles: 1,
  init: function () {
    this.on("maxfilesexceeded", function (file) {
      this.removeAllFiles();
      this.addFile(file);
    });
  }
};
