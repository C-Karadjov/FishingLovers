import $ from 'jquery';
import { compile } from 'templatesCompiler';

const $mainContainer = $('#main-container');
const $carouselContainer = $('#carousel-container');

function getGalleryPage() {
    $carouselContainer.html('');
    return compile('gallery')
        .then((template) => {
            $mainContainer.html(template);
        })
        .then(() => {
            const $uploadButton = $('#upload-button');
            const $file = $('#file');
            
            $uploadButton.on('click', () => {
                const selectedFile = $file[0].files[0];
                const fileName = selectedFile.name;
                const storageRef = firebase.storage().ref('/images/' + fileName);
                const uploadTask = storageRef.put(selectedFile);
                
                uploadTask.on('state_changed', function (snapshot) {
                }, function (error) {
                    // Handle unsuccessful uploads
                }, function () {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    const downloadURL = uploadTask.snapshot.downloadURL;
                    console.log(downloadURL);
                });
            })
        })
}

export { getGalleryPage };