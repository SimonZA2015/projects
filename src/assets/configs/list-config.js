import image from '../media/app_icon.png';
import v0 from '../media/voron.png';
import v1 from '../media/voron2.png';
import v2 from '../media/scooter.png';
import v3 from '../media/scooter1.jpg';
import v4 from '../media/scooter0.jpg';
import v5 from '../media/scooter3.jpg';
import v6 from '../media/scooter4.jpg';
import apk from '../media/app-debug.apk';

const ListConfig = [
    {
        id: 0,
        name: 'Horseneers',
        text: 'Horseneers - игра лошадь на марсе',
        image: [
            'https://camo.githubusercontent.com/51c0928bf89c4faa1acc947b1bd7ce620473129a0c4814fe8f27ee37e0cfcdf3/68747470733a2f2f76347839676c6a786c71626c7a777a68696e62756f712d6f6e2e6472762e74772f566b6f6e797573686e652f6d79253230737974652f6173736574732f696d616765732f313131',

        ],
        stack: ["Python", "PyGame"],
        logo: 'https://firebasestorage.googleapis.com/v0/b/hshn-301a5.appspot.com/o/other%2FlogoApp.png?alt=media&token=1f39e95e-d045-44bc-a8a3-d066166edd66',
        buttons: [{
            name: 'Перейти',
            url: '/horseneers',
        },{
            name: 'Скачать',
            url: 'https://github.com/SimonZA2015/Mars-Horse',
        },

        ]
    },
    {
        id: 1,
        name: 'HorseBook',
        text: 'HorseBook - нацелено на объеденение услуг в конной сфере',
        stack: ["Java", "VKUI", "JS", "React"],
        image: [
            'https://firebasestorage.googleapis.com/v0/b/hshn-301a5.appspot.com/o/other%2F2021-09-22_18-47-18.png?alt=media&token=a318c639-30ac-40ec-bbac-71a62e83ea54',
            "https://firebasestorage.googleapis.com/v0/b/hshn-301a5.appspot.com/o/other%2F2021-09-22_18-47-58.png?alt=media&token=0427bb04-0d8e-4fcb-9a09-3ade4113d3e7",
        ],
        logo: 'https://firebasestorage.googleapis.com/v0/b/hshn-301a5.appspot.com/o/other%2Fзагруженное%20(2).png?alt=media&token=d9363400-66ff-495e-902e-effcf80861cb',
        buttons: [{
            name: 'Перейти',
            url: 'https://hb.denishik.ru',
        },{
            name: 'VK App',
            url: 'https://vk.com/app7683801_222901560',
        }]
    },{
        id: 2,
        name: 'VRCat',
        text: 'VRCat - приложение сделаное для игры VRChat, чтобы следить за друзьями и мирами',
        image: [
            "https://play-lh.googleusercontent.com/gDSQ79wnDq30bcsOtG-rs-x9EKBivIRj4QZY0wQiFR7y1_1C1LPjM5F19bq2wKE9bJc=w526-h296-rw",
            "https://play-lh.googleusercontent.com/OT3f3d13U7Bg-s0QtaxLfjT8e4DQN7RvNut7SoPsBiGi6OHKFhjUvuFQdxpvhjUwNgc=w526-h296-rw",
            "https://play-lh.googleusercontent.com/l8wyDd8GyacdywnycfMRgBW-d1SsYGrsqFl1iQef29kV7m5Iia0cKmuEmlCMCUGgQus=w526-h296-rw",
            "https://play-lh.googleusercontent.com/NRthfdv89ok87sWLaHKRlOZkXA_8CrB7VNUkSkp8ZZLh9QUvJdv_3nNhOOxMnjOhtC1i=w526-h296-rw"
            ],
        logo: image,
        stack: ["Java", "Kotlin", "VRChatApi", "CircleImageView"],
        buttons: [{
            name: 'Google play',
            url: 'https://play.google.com/store/apps/details?id=com.denishik.vrchat',
        }, {
            name: 'Web',
            url: 'https://vrchat.denishik.ru/vrcat',
        }]
    },{
        id: 3,
        name: 'ЧК Ворон',
        text: 'ЧК Ворон - сайт для конюшни с управлением цен услуг, лошадей и сотрудников',
        image: [
                v0,
                v1
            ],
        logo: "https://voron.denishik.ru/favicon.ico",
        stack: ["JS", "React", "Firebase", "DHCui"],
        buttons: []
    },{
        id: 4,
        name: 'SC scooter',
        text: 'App for scooter midway',
        image: [v3,v4,v5,v6],
        logo: v2,
        stack: ["Java", "Material UI", "Yandex MapKit"],
        buttons: [{
            name: 'Google play',
            url: 'https://play.google.com/store/apps/details?id=com.denishik.vrchat',
        },{
            name: 'Apk',
            url: apk,
        }]
    },
]

export default ListConfig