
/** 
 *  Hi Ahmad, I'm sorry for using Js in this task but
 *  I cannot fix ':checked' problem only with Css.
 *  Here we gonna listen for labels click then
 *  we'll trigger the checkbox action that clicked
 *  on it's label.
 */
window.onload = () => {

    function checkCurrentBox(params) {
        var classname;
        switch (params) {

            case "Projects":
                classname = '.red';
                break;
            case "My Work":
                classname = '.green';
                break;
            case "Activity":
                classname = '.white';
                break;
            case "Calendar":
                classname = '.skyBlue';
                break;
            case "People":
                classname = '.pink';
                break;
            case "Invoices":
                classname = '.default';
                break;
            case "Estimates":
                classname = '.yellow';
                break;

            default:
                break;
        }

        const el = document.querySelector(classname);
        if (el.checked === true) {
            el.checked = false;
        } else {
            el.checked = true
        }

    }

    var labels = document.getElementsByTagName('label');
    for (let index = 0; index < labels.length; index++) {
        const element = labels[index];

        element.onclick = () => {
            checkCurrentBox(element.innerHTML);
        }
    }
}