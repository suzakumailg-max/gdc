import menu1 from "../../assets/images/menu1-min.jpg";
import menu2 from "../../assets/images/menu2-min.jpg";
import menu3 from "../../assets/images/menu3-min.jpg";

export const menuList = [
    {
        title: "Coffee Drink",
        image: menu1,
        alt: "Coffee Drink",
        menus: [
            { name: "エスプレッソ", price: "330円" },
            { name: "エスプレッソダブル", price: "380円" },
            { name: "アメリカーノ(ホット / アイス)", price: "420円" },
            { name: "マキアート", price: "450円" },
            { name: "カプチーノ", price: "490円" },
            { name: "カフェラテ", price: "540円" },
            { name: "アイスカフェラテ", price: "540円" },
            { name: "エスプレッソトニック", price: "540円" },
            { name: "エクストラショット", price: "プラス70円" },
        ],
    },
    {
        title: "Other Drink",
        image: menu2,
        alt: "Other Drink",
        menus: [
            { name: "オレンジジュース", price: "500円" },
            { name: "コカコーラ", price: "500円" },
            { name: "トニックウォーター", price: "500円" },
            { name: "ジンジャーエール カナダドライ", price: "500円" },
            { name: "スパークリングウォーター (サンペレグリノ 250ml 瓶)", price: "500円" },
            { name: "ウーロン茶", price: "550円" },
            { name: "ノンアルコールビール (モレッティーゼロ / イタリア)", price: "600円" },
        ],
    },
    {
        title: "Morning Set",
        image: menu3,
        alt: "Morning Set",
        menus: [
            { name: "サラダモーニング プレートセット", price: "850円" },
            { name: "クロックムッシュのモーニングセット", price: "850円" },
            { name: "チキンスペシャルサンドイッチセット", price: "850円" },
        ],
    },
];
