// SSUIIII SWAGGER JAVASCRIPT

const teamMember = [

    {
        name: 'Wayne Barnet',
        role: 'Founder & CEO',
        foto: '../img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        foto: '../img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        foto: '../img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        foto: '../img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        foto: '../img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        foto: '../img/barbara-ramos-graphic-designer.jpg',
    },
]

for (let i = 0; i < teamMember.length; i++) {
    console.log(teamMember[i]);
    for (let key in teamMember[i]) {
        console.log('chiave ' + key); 
        console.log(teamMember[i][key]);
    }
}


document.querySelector('.array').innerHTML = teamMember[0].name;












