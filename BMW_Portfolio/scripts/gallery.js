window.addEventListener('load', function() {

    let showGalleryPreview = function (){
        let galleryPreview = document.querySelectorAll('.BMW');
        galleryPreview.forEach(function(elem){
            elem.addEventListener('click', function() {
                let gallery = document.querySelector('.gallery__preview');
                let previewExpand = document.querySelector('.gallery__preview_expand');
                let previeCaption = document.querySelector('.img__caption');

                previewExpand.src = this.src;
                previeCaption.innerHTML = this.alt;

                gallery.style.display = 'block';

                bntClose();
            });

        });
    };

    const bntClose = function() {
        let bnt = document.querySelector('.gallery__preview_bntClose');
        bnt.addEventListener('click', function() {
            this.parentElement.style.display = 'none';
        });
    };
    
    showGalleryPreview();

});
