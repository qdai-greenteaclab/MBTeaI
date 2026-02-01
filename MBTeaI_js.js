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
    document.querySelector("#btn_before").disabled = true;
    document.getElementById('btn_before').style.display = 'none';
    //〇ボタンコード
    const tyousa_maru = () => {
        haiten[0]+=Number(mondaibun[c-1][3])
        haiten[1]+=Number(mondaibun[c-1][4])
        haiten[2]+=Number(mondaibun[c-1][5])
        haiten[3]+=Number(mondaibun[c-1][6])
        document.querySelector('#question').textContent = mondaibun[c][0];
        document.querySelector('#btn_q1').textContent = mondaibun[c][1];
        document.querySelector('#btn_q2').textContent = mondaibun[c][2];
        var progress = document.getElementById("myProgress");
        progress.value += 10;
        document.querySelector("#btn_before").disabled = false;
        document.getElementById('btn_before').style.display = 'inline';
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
        var progress = document.getElementById("myProgress");
        progress.value += 10;
        document.querySelector("#btn_before").disabled = false;
        document.getElementById('btn_before').style.display = 'inline';
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
//前に戻るボタンのコード
    const tyousa_before = () => {
        if (c == mondaisuu + 1){
        document.querySelector("#btn_fi").disabled = true;
        document.getElementById('btn_fi').style.display = 'none';
        document.querySelector("#btn_q1").disabled = false;
        document.querySelector("#btn_q2").disabled = false;
        document.getElementById('btn_q1').style.display = 'inline'
        document.getElementById('btn_q2').style.display = 'inline'
        }
        c-=1
        haiten[0]-=Number(mondaibun[c-1][3])
        haiten[1]-=Number(mondaibun[c-1][4])
        haiten[2]-=Number(mondaibun[c-1][5])
        haiten[3]-=Number(mondaibun[c-1][6])
        document.querySelector('#question').textContent = mondaibun[c-1][0];
        document.querySelector('#btn_q1').textContent = mondaibun[c-1][1];
        document.querySelector('#btn_q2').textContent = mondaibun[c-1][2];
        var progress = document.getElementById("myProgress");
        progress.value -= 10;
        if (c == 1){
            document.querySelector("#btn_before").disabled = true;
            document.getElementById('btn_before').style.display = 'none';
        }
    }
    btn_before.addEventListener('click',tyousa_before)
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
        'ELT',
        'ELS',
        'ENT',
        'ENS',
        'PLT',
        'PLS',
        'PNT',
        'PNS',
    ]
    const MBTeaI_description_first = [
        'E-L-T（体験 × 地元 × 伝統)',
        'E-L-S（体験 × 地元 × 創造)',
        'E-N-T（体験 × 全国 × 伝統)',
        'E-N-S（体験 × 全国 × 創造）',
        'P-L-T（商品 × 地元 × 伝統）',
        'P-L-S（商品 × 地元 × 創造）',
        'P-N-T（商品 × 全国 × 伝統）',
        'P-N-S（商品 × 全国 × 創造）',
    ]
    const MBTeaI_description_second =[
        '落ち着いた時間と、昔ながらの温もりを大切にするあなた。派手さよりも心が休まる空間を好み、地元の文化や歴史に安心感を覚えるタイプです。',
        '地元の良さを“今の自分らしく”楽しみたいあなた。馴染みのあるものをおしゃれに味わうのが好きで、写真映えやカフェの雰囲気にも惹かれるタイプです。',
        'お店でしかできない体験や、丁寧な時間を求めるあなた。全国の文化や歴史に興味があり、落ち着いた和の空間でじっくり味わうことに価値を感じるタイプです。',
        '新しいものやユニークな体験にワクワクするあなた。カラフルで個性的なメニューや、世界観のあるカフェが好きな、好奇心旺盛なタイプです。',
        '確かな品質と、地元の職人技を信頼するあなた。派手さより中身の良さを重視し、日常に寄り添う“間違いない一品”を選びたいタイプです。',
        '地元の魅力を、洗練された形で楽しみたいあなた。デザイン性やストーリー性のある商品が好きで、ギフト選びにもこだわりがあるタイプです。',
        '品質や産地にこだわり、良いものを丁寧に選ぶあなた。専門店の雰囲気や“目利き”の存在を信頼し、本質的な価値を大切にするタイプです。',
        'スタイリッシュで新しいお茶の楽しみ方を求めるあなた。オンラインや新ブランドにも敏感で、ライフスタイルに合う“自分らしい一杯”を選ぶタイプです。',
    ]
    const MBTeaI_description_third = [
        '地元で長く愛されてきた老舗のお茶屋さん。畳や木の香りがする落ち着いた店内で、昔ながらの淹れ方のお茶をゆっくり味わえる。観光というより、地元の日常に溶け込むような、ほっとする時間を提供するお店。',
        '地元のお茶を、現代的なカフェスタイルで楽しめるお店。ラテやスイーツなど写真映えするメニューも多く、若い人でも入りやすい。馴染みのある地元茶を、新しい形で体験できる場所。',
        '全国の銘茶を、落ち着いた和の空間で飲み比べできるお店。茶器や作法にもこだわりがあり、まるで旅先の茶室にいるような雰囲気。遠くへ行かなくても、各地の伝統的なお茶文化を体験できます。',
        '全国や海外の茶葉を自由にアレンジした、コンセプト性の高いティーカフェ。色鮮やかなドリンクやスイーツが多く、世界観を楽しむタイプのお店。新しい飲み方や組み合わせに出会える、実験的で遊び心のある空間。',
        '地元の茶農家や職人が作る茶葉を中心に扱う、昔ながらの茶舗。家庭用のお茶を買いに来る常連が多く、手土産にも選ばれる。派手さはないが、確かな品質で日常に寄り添う“地元の定番”のような存在。',
        '地元のお茶を、現代的なデザインやストーリーで魅力的に発信する新しい茶ブランド。パッケージが洗練されていてギフトにも向く。地元の魅力を今の時代に合わせて届ける、スタイリッシュなローカルショップ。',
        '全国の銘茶を厳選して販売する専門店。店主が茶の知識に詳しく、好みに合わせて茶葉を選んでくれる。品質が確かで、“良いお茶を買いたい人”が安心して訪れる場所。',
        '全国や海外の茶葉を自由にブレンドし、現代的なブランドとして展開するお店。オンライン販売も強く、ボトルティーやティーバッグなど形も多様。ライフスタイルに合わせて選べる、今どきのティーセレクトショップ。',
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
    ]
    const otyayasan_name =[
        'nothing',
        'ふりゅう',
        'nothing',
        'TEAWAVE\n山科',
        '岩木園\n山口園',
        '蘊',
        '栗原園\n光安青霞園',
        'nothing',
    ]
    //診断結果を表示するコード 
    let kekka = [
        Number(sessionStorage.getItem('shindankekka_a')),
        Number(sessionStorage.getItem('shindankekka_b')),
        Number(sessionStorage.getItem('shindankekka_c')),
        Number(sessionStorage.getItem('shindankekka_d')),
    ];
    const MBTeai_kansei =  MBTeaI[4*kekka[0]+2*kekka[1]+kekka[2]]
    document.querySelector('#kekka_hyouzi').textContent =MBTeai_kansei;
    //const kekka_Image = document.getElementById('otyaya_gazou');
    //kekka_Image.src = otyayasan_gazou[kekka[0]];
    document.querySelector('#kekka_description_first').textContent = MBTeaI_description_first[4*kekka[0]+2*kekka[1]+kekka[2]];
    document.querySelector('#kekka_description_second').textContent = MBTeaI_description_second[4*kekka[0]+2*kekka[1]+kekka[2]];
    document.querySelector('#kekka_description_third').textContent = MBTeaI_description_third[4*kekka[0]+2*kekka[1]+kekka[2]];
    document.querySelector('#kekka_name').textContent = otyayasan_name[4*kekka[0]+2*kekka[1]+kekka[2]];
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
