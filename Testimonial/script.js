const desig = document.querySelector('.designation');
const profile = document.querySelector('.picchange')
const details = document.querySelector('.info');
const animation = document.querySelector('.ani');
const nameqwe = document.querySelector('.Name');
const obj = [
    {
        role: "UI/ UX Designer ",
        photo: 'https://media.gettyimages.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?s=612x612',
        name: "Smith",
        text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He/she is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
        color: "#e7beff",
        ani: ""

    },
    {
        role: "front-end developer",
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrOwSINc8gQvfuysF6H1zG-9eCXHnfOAHerkvknw2VMGwMRJVtlj05D1s1GcI9EJLDEDY&usqp=CAU',
        name: "Coroline",
        text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He/she is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
        color: "#ff72a4",
        ani: ""



    },
    {
        role: "Back-end developer",
        photo: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
        name: "Andrew",
        text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He/she is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
        color: "#beffcd",
        ani: ""



    },
    {
        role: "Software developer ",
        photo: 'https://media.istockphoto.com/photos/smiling-young-woman-beauty-close-up-portrait-picture-id1280113805?k=20&m=1280113805&s=612x612&w=0&h=4axzFdjwxVoxSCYGDZGgx0ipyhmOd7N4_OEyokFcZiU=',
        name: "Olivia",
        text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He/she is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
        color: "#befff5",
        ani: ""


    },
    {
        role: "Andriod Developer ",
        photo: 'https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=20&m=1089633230&s=612x612&w=0&h=LNxo51TlLc-a8hNjJk5foJC9CI842yor3RvgNosIuKw=',
        name: "Emily",
        text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He/she is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
        color: "#f0ffbe",
        ani: ""


    },
    {
        role: "Ios Developer ",
        photo: 'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
        name: "Joseph",
        text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He/she is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
        color: "#f0ffbe",
        ani: ""


    }]

var index = 0;

function display() {
    const { role, photo, name, text, color, ani } = obj[index]
    desig.innerHTML = role;
    animation.innerHTML = " <br>";
    nameqwe.innerHTML = name;
    // dpho / sheto;
    details.innerHTML = text;
    profile.src = photo;
    const card = document.getElementById("card").style.backgroundColor = color;

    index++;
    if (index > obj.length - 1) {
        index = 0
    }
    // index = 0;
}

setInterval(display, 5000)