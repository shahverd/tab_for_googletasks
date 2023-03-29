setTimeout(function () {

    if (!document.getElementById('banner'))
    {
        var banner = document.createElement('div');
        banner.id = 'banner';
        banner.style.textAlign = 'center';

        var h2 = document.createElement('h2');
        h2.innerText = 'Google Tasks';
        h2.style = "color:grey; font-weight: 500;  font-family: 'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif";
        banner.appendChild(h2);

        var img = document.createElement('img');
        img.src = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Google_Tasks_2021.svg";
        img.style = "max-width: 25px; margin-right: 5px; margin-bottom: -2px"
        h2.prepend(img);

        var parentElement = document.querySelector('c-wiz>div');
        var referenceElement = document.querySelector('c-wiz>div>div');
        referenceElement.style.height = 'calc(100% - 100px)';
        parentElement.insertBefore(banner, referenceElement);
    }
}, 500);
