//ホーム画面のコード
document.addEventListener('DOMContentLoaded', (event) => {
    const btn_home =document.querySelector('#btn_home');
    const shindan_st = () => {
        window.location.href = "MBTeaI_question.html";;
    }
    btn_home.addEventListener('click',shindan_st);
});
//診断のコード
document.addEventListener('DOMContentLoaded', (event) => {

    const btn_q1 =document.querySelector('#btn_q1');
    const btn_q2 =document.querySelector('#btn_q2');

    let haiten = [0,0,0,0];

    let c = 0//問題数カウント
    let mondaisuu = 9
    //問題文格納配列
    const mondaibun = [
        ['お茶を飲むスタイルは？','お店で楽しみたい','家に帰って楽しみたい',3,0,0,0],
        ['髪切ってもらっている時のあなたは？','店員さんと話したい','できるだけ話したくない',2,0,0,0],
        ['お金があったらどっちに使いたいか？','旅行','欲しいものを買う',2,0,0,0],
        ['どんなお茶が飲みたい？','お茶屋さんのある地域のお茶 ','全国各地のお茶 ',0,3,0,0],
        ['どちらをより知りたい？','地元の魅力 ','地元と離れた未知の世界',0,2,0,0],
        ['ファミレスで頼むのは？','慣れ親しんだ定番メニュー','未知の商品',0,2,0,0],
        ['店の雰囲気として魅力的なのは？','現代的なカフェっぽいお店 ','老舗感のある建物のお店',0,0,3,0],
        ['商品に魅力を感じるのはどちら？','古くから続く製法・定番商品','新開発のブレンド・現代風アレンジ',0,0,2,0],
        ['あなたの価値観は？','古くからの伝統を大事にしたい','時代に合った新しいやり方をしたい',0,0,2,0],
        ['診断は終わりです！']
    ];

    //一問目表示のコード
    document.querySelector('#question').textContent = mondaibun[c][0];
    document.querySelector('#btn_q1').textContent = mondaibun[c][1];
    document.querySelector('#btn_q2').textContent = mondaibun[c][2];
    c+=1
    document.querySelector("#btn_fi").disabled = true;
    document.getElementById('btn_fi').style.display = 'none'
    //〇ボタンコード
    const tyousa_maru = () => {
        haiten[0]+=Number(mondaibun[c-1][3])
        haiten[1]+=Number(mondaibun[c-1][4])
        haiten[2]+=Number(mondaibun[c-1][5])
        haiten[3]+=Number(mondaibun[c-1][6])
        document.querySelector('#question').textContent = mondaibun[c][0];
        document.querySelector('#btn_q1').textContent = mondaibun[c][1];
        document.querySelector('#btn_q2').textContent = mondaibun[c][2];
        c+=1
        if (c == mondaisuu + 1){
        document.querySelector("#btn_fi").disabled = false;
        document.getElementById('btn_fi').style.display = 'inline'
        document.querySelector("#btn_q1").disabled = true;
        document.querySelector("#btn_q2").disabled = true;
        document.getElementById('btn_q1').style.display = 'none'
        document.getElementById('btn_q2').style.display = 'none'
        let k = [
            Math.floor(haiten[0]/4).toString(),
            Math.floor(haiten[1]/4).toString(),
            Math.floor(haiten[2]/4).toString(),
            Math.floor(haiten[3]/4).toString(),
        ];
        sessionStorage.setItem('shindankekka_a',k[0]);
        sessionStorage.setItem('shindankekka_b',k[1]);
        sessionStorage.setItem('shindankekka_c',k[2]);
        sessionStorage.setItem('shindankekka_d',k[3]);
    }
    }
    //✖ボタンコード
    const tyousa_batu = () => {
        document.querySelector('#question').textContent = mondaibun[c][0];
        document.querySelector('#btn_q1').textContent = mondaibun[c][1];
        document.querySelector('#btn_q2').textContent = mondaibun[c][2];
        c+=1
        if (c == mondaisuu + 1){
        document.querySelector("#btn_fi").disabled = false;
        document.getElementById('btn_fi').style.display = 'inline';
        document.querySelector("#btn_q1").disabled = true;
        document.querySelector("#btn_q2").disabled = true;
        document.getElementById('btn_q1').style.display = 'none'
        document.getElementById('btn_q2').style.display = 'none'
        let k = [
            Math.floor(haiten[0]/4).toString(),
            Math.floor(haiten[1]/4).toString(),
            Math.floor(haiten[2]/4).toString(),
            Math.floor(haiten[3]/4).toString(),
        ];
        sessionStorage.setItem('shindankekka_a',k[0]);
        sessionStorage.setItem('shindankekka_b',k[1]);
        sessionStorage.setItem('shindankekka_c',k[2]);
        sessionStorage.setItem('shindankekka_d',k[3]);
    }
    }

    btn_q1.addEventListener('click',tyousa_maru)
    btn_q2.addEventListener('click',tyousa_batu)
});
//診断結果に遷移するコード
document.addEventListener('DOMContentLoaded', (event) => {
    const btn_fi =document.querySelector('#btn_fi');
    const shindan_fi = () => {
        window.location.href = "MBTeaI_shindankekka.html";;
    }
    btn_fi.addEventListener('click',shindan_fi);
});
//診断結果画面のコード
document.addEventListener('DOMContentLoaded', (event) => {
    const btn_fini =document.querySelector('#btn_fini');
    //診断結果の格納配列
    const MBTeaI = [
        ['E','P'],
        ['L','N'],
        ['T','S'],
        ['',''],
    ]
    //お茶屋さんの格納配列
    const otyayasan_gazou = [
        'IMAGE/IMAGE_3730.jpg',
        'IMAGE/club_logo.png',
        'IMAGE/1755773016761.jpg',
        'IMAGE/logo.png',
        'IMAGE/スクリーンショット 2025-11-25 214845.png',
        'IMAGE/スクリーンショット 2025-11-25 214845.png',
        'IMAGE/1755773016761.jpg',
        'IMAGE/スクリーンショット 2025-11-25 214845.png',
        'IMAGE/スクリーンショット 2025-11-25 214845.png',
        'IMAGE/1755773016761.jpg',
    ]
    //診断結果を表示するコード 
    let kekka = [
        Number(sessionStorage.getItem('shindankekka_a')),
        Number(sessionStorage.getItem('shindankekka_b')),
        Number(sessionStorage.getItem('shindankekka_c')),
        Number(sessionStorage.getItem('shindankekka_d')),
    ];
    const MBTeai_kansei =  MBTeaI[0][kekka[0]] + MBTeaI[1][kekka[1]] + MBTeaI[2][kekka[2]]
    document.querySelector('#kekka_hyouzi').textContent =MBTeai_kansei;
    const kekka_Image = document.getElementById('otyaya_gazou');
    kekka_Image.src = otyayasan_gazou[kekka[0]];
    //ホーム画面に戻るコード
    const go_home = () => {
        window.location.href = "index.html";;
        kekka = 0
        k = 0
        sessionStorage.removeItem('shindankekka');
    }
    btn_fini.addEventListener('click',go_home);
});
    //お茶屋さん紹介のページのコード
document.addEventListener('DOMContentLoaded', (event) => {
    
});