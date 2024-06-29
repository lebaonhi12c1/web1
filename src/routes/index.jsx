/* eslint-disable no-unused-vars */
import RootLayout from '@/layouts/root-layout';
import CreateFeedback from '@/pages/tiengviet/create-feedback';
import Feedbacks from '@/pages/tiengviet/feedbacks';
import Home from '@/pages/home';
import NotFound from '@/pages/not-found';
import Account from '@/pages/tiengviet/account';
import ConNguoiTV from '@/pages/tiengviet/van-hoa/con-nguoi/con-nguoi-tv';
import BunSuongQuanTV from '@/pages/tiengviet/foods/bun-suong/bun-suong-quan-tv';
import Hdsd from '@/pages/tiengviet/hdsd';
import DIALYTV from '@/pages/tiengviet/van-hoa/dia-ly/dia-ly-tv';
import KHIHAUTV from '@/pages/tiengviet/van-hoa/khi-hau/khi-hau';
import LICHSUTV from '@/pages/tiengviet/van-hoa/lich-su/lich-su';
import TAINGUYENTV from '@/pages/tiengviet/van-hoa/tai-nguyen/tai-nguyen';
import THIENNHIENTV from '@/pages/tiengviet/van-hoa/thien-nhien/thien-nhien';
import BUNSUONGMAINTV from '@/pages/tiengviet/foods/bun-suong/bun-suong-main-tv';
import BANHCANHMAINTV from '@/pages/tiengviet/foods/banh-canh/banh-canh-main-tv';
import BANHCANHQUANTV from '@/pages/tiengviet/foods/banh-canh/banh-canh-quan-tv';
import BANHRAYMAINTV from '@/pages/tiengviet/foods/banh-ray/banh-ray-main-tv';
import BANHTETMAINTV from '@/pages/tiengviet/foods/banh-tet/banh-tet-main-tv';
import BUNNUOCLEOMAINTV from '@/pages/tiengviet/foods/bun-nuoc-leo/bun-nuoc-leo-main-tv';
import CAKHOAIMAINTV from '@/pages/tiengviet/foods/ca-khoai/ca-khoai-main-tv';
import CHAHOAMAINTV from '@/pages/tiengviet/foods/cha-hoa/cha-hoa-main-tv';
import CHAOAMMAINTV from '@/pages/tiengviet/foods/chao-am/chao-am-main-tv';
import CHUUMAINTV from '@/pages/tiengviet/foods/chu-u/chu-u-main-tv';
import COMDEPMAINTV from '@/pages/tiengviet/foods/com-dep/com-dep-main-tv';
import DUASAPMAINTV from '@/pages/tiengviet/foods/dua-sap/dua-sap-main-tv';
import MAMBOHOCMAINTV from '@/pages/tiengviet/foods/mam-bo-hoc/mam-bo-hoc-main-tv';
import TRAIQUACHMAINTV from '@/pages/tiengviet/foods/trai-quach/trai-quach-main-tv';
import NUOCMAMRUOIMAINTV from '@/pages/tiengviet/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-main-tv';
import BANHRAYQUANTV from '@/pages/tiengviet/foods/banh-ray/banh-ray-quan-tv';
import BANHTETQUANTV from '@/pages/tiengviet/foods/banh-tet/banh-tet-quan-tv';
import BUNNUOCLEOQUANTV from '@/pages/tiengviet/foods/bun-nuoc-leo/bun-nuoc-leo-quan-tv';
import CAKHOAIQUANTV from '@/pages/tiengviet/foods/ca-khoai/ca-khoai-quan-tv';
import CHAHOAQUANTV from '@/pages/tiengviet/foods/cha-hoa/cha-hoa-quan-tv';
import CHUUQUANTV from '@/pages/tiengviet/foods/chu-u/chu-u-quan-tv';
import CHAOAMQUANTV from '@/pages/tiengviet/foods/chao-am/chao-am-quan-tv';
import COMDEPQUANTV from '@/pages/tiengviet/foods/com-dep/com-dep-quan-tv';
import BUNSUONGQUANTV from '@/pages/tiengviet/foods/bun-suong/bun-suong-quan-tv';
import DUASAPQUANTV from '@/pages/tiengviet/foods/dua-sap/dua-sap-quan-tv';
import MAMBOHOCQUANTV from '@/pages/tiengviet/foods/mam-bo-hoc/mam-bo-hoc-quan-tv';
import NUOCMAMRUOIQUANTV from '@/pages/tiengviet/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-quan-tv';
import TRAIQUACHQUANTV from '@/pages/tiengviet/foods/trai-quach/trai-quach-quan-tv';
import CONNGUOITA from '@/pages/tieng-anh/van-hoa/con-nguoi/con-nguoi-ta';
import DIALYTA from '@/pages/tieng-anh/van-hoa/dia-ly/dia-ly-ta';
import KHIHAUTA from '@/pages/tieng-anh/van-hoa/khi-hau/khi-hau-ta';
import LICHSUTA from '@/pages/tieng-anh/van-hoa/lich-su/lich-su-ta';
import TAINGUYENTA from '@/pages/tieng-anh/van-hoa/tai-nguyen/tai-nguyen-ta';
import THIENNHIENTA from '@/pages/tieng-anh/van-hoa/thien-nhien/thien-nhien-ta';
import BANHCANHMAINTA from '@/pages/tieng-anh/foods/banh-canh/banh-canh-main-ta';
import BANHCANHQUANTA from '@/pages/tieng-anh/foods/banh-canh/banh-canh-quan-ta';
import ConNguoiKM from '@/pages/tieng-khmer/van-hoa/con-nguoi/con-nguoi-khmer';
import DIALYKM from '@/pages/tieng-khmer/van-hoa/dia-ly/dia-ly-khmer';
import BANHRAYMAINTA from '@/pages/tieng-anh/foods/banh-ray/banh-ray-main-ta';
import KHIHAUKM from '@/pages/tieng-khmer/van-hoa/khi-hau/khi-hau-khmer';
import LICHSUKM from '@/pages/tieng-khmer/van-hoa/lich-su/lich-su-khmer';
import TAINGUYENKM from '@/pages/tieng-khmer/van-hoa/tai-nguyen/tai-nguyen-khmer';
import THIENNHIENKM from '@/pages/tieng-khmer/van-hoa/thien-nhien/thien-nhien-khmer';
import BANHCANHMAINKM from '@/pages/tieng-khmer/foods/banh-canh/banh-canh-main-khmer';
import BANHTETMAINTA from '@/pages/tieng-anh/foods/banh-tet/banh-tet-main-ta';
import BANHRAYMAINKM from '@/pages/tieng-khmer/foods/banh-ray/banh-ray-main-khmer';
import BUNNUOCLEOMAINTA from '@/pages/tieng-anh/foods/bun-nuoc-leo/bun-nuoc-leo-main-ta';
import BANHTETMAINKM from '@/pages/tieng-khmer/foods/banh-tet/banh-tet-main-khmer';
import BANHCANHQUANKM from '@/pages/tieng-khmer/foods/banh-canh/banh-canh-quan-khmer';
import BUNSUONGMAINTA from '@/pages/tieng-anh/foods/bun-suong/bun-suong-main-ta';
import CAKHOAIMAINTA from '@/pages/tieng-anh/foods/ca-khoai/ca-khoai-main-ta';
import CHAHOAMAINTA from '@/pages/tieng-anh/foods/cha-hoa/cha-hoa-main-ta';
import CHAOAMMAINTA from '@/pages/tieng-anh/foods/chao-am/chao-am-main-ta';
import CHUUMAINTA from '@/pages/tieng-anh/foods/chu-u/chu-u-main-ta';
import COMDEPMAINTA from '@/pages/tieng-anh/foods/com-dep/com-dep-main-ta';
import DUASAPMAINTA from '@/pages/tieng-anh/foods/dua-sap/dua-sap-main-ta';
import MAMBOHOCMAINTA from '@/pages/tieng-anh/foods/mam-bo-hoc/mam-bo-hoc-main-ta';
import NUOCMAMRUOIMAINTA from '@/pages/tieng-anh/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-main-ta';
import TRAIQUACHMAINTA from '@/pages/tieng-anh/foods/trai-quach/trai-quach-main-ta';
import BANHRAYQUANTA from '@/pages/tieng-anh/foods/banh-ray/banh-ray-quan-ta';
import BUNSUONGQUANTA from '@/pages/tieng-anh/foods/bun-suong/bun-suong-quan-ta';
import BANHTETQUANTA from '@/pages/tieng-anh/foods/banh-tet/banh-tet-quan-ta';
import BUNNUOCLEOQUANTA from '@/pages/tieng-anh/foods/bun-nuoc-leo/bun-nuoc-leo-quan-ta';
import CAKHOAIQUANTA from '@/pages/tieng-anh/foods/ca-khoai/ca-khoai-quan-ta';
import CHAHOAQUANTA from '@/pages/tieng-anh/foods/cha-hoa/cha-hoa-quan-ta';
import CHAOAMQUANTA from '@/pages/tieng-anh/foods/chao-am/chao-am-quan-ta';
import CHUUQUANTA from '@/pages/tieng-anh/foods/chu-u/chu-u-quan-ta';
import COMDEPQUANTA from '@/pages/tieng-anh/foods/com-dep/com-dep-quan-ta';
import DUASAPQUANTA from '@/pages/tieng-anh/foods/dua-sap/dua-sap-quan-ta';
import NUOCMAMRUOIQUANTA from '@/pages/tieng-anh/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-quan-ta';
import TRAIQUACHQUANTA from '@/pages/tieng-anh/foods/trai-quach/trai-quach-quan-ta';
import MAMBOHOCQUANTA from '@/pages/tieng-anh/foods/mam-bo-hoc/mam-bo-hoc-quan-ta';
import BUNSUONGMAINKM from '@/pages/tieng-khmer/foods/bun-suong/bun-suong-main-khmer';
import BUNSUONGQUANKM from '@/pages/tieng-khmer/foods/bun-suong/bun-suong-quan-khmer';
import BUNNUOCLEOMAINKM from '@/pages/tieng-khmer/foods/bun-nuoc-leo/bun-nuoc-leo-main-khmer';
import CAKHOAIMAINKM from '@/pages/tieng-khmer/foods/ca-khoai/ca-khoai-main-khmer';
import CAKHOAIQUANKM from '@/pages/tieng-khmer/foods/ca-khoai/ca-khoai-quan-khmer';
import CHAHOAMAINKM from '@/pages/tieng-khmer/foods/cha-hoa/cha-hoa-main-khmer';
import CHAHOAQUANKM from '@/pages/tieng-khmer/foods/cha-hoa/cha-hoa-quan-khmer';
import CHAOAMMAINKM from '@/pages/tieng-khmer/foods/chao-am/chao-am-main-khmer';
import CHAOAMQUANKM from '@/pages/tieng-khmer/foods/chao-am/chao-am-quan-khmer';
import CHUUMAINKM from '@/pages/tieng-khmer/foods/chu-u/chu-u-main-khmer';
import CHUUQUANKM from '@/pages/tieng-khmer/foods/chu-u/chu-u-quan-khmer';
import COMDEPMAINKM from '@/pages/tieng-khmer/foods/com-dep/com-dep-main-khmer';
import COMDEPQUANKM from '@/pages/tieng-khmer/foods/com-dep/com-dep-quan-khmer';
import DUASAPMAINKM from '@/pages/tieng-khmer/foods/dua-sap/dua-sap-main-khmer';
import DUASAPQUANKM from '@/pages/tieng-khmer/foods/dua-sap/dua-sap-quan-khmer';
import MAMBOHOCMAINKM from '@/pages/tieng-khmer/foods/mam-bo-hoc/mam-bo-hoc-main-khmer';
import MAMBOHOCQUANKM from '@/pages/tieng-khmer/foods/mam-bo-hoc/mam-bo-hoc-quan-khmer';
import NUOCMAMRUOIMAINKM from '@/pages/tieng-khmer/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-main-khmer';
import NUOCMAMRUOIQUANKM from '@/pages/tieng-khmer/foods/nuoc-mam-ruoi/nuoc-mam-ruoi-quan-khmer';
import TRAIQUACHMAINKM from '@/pages/tieng-khmer/foods/trai-quach/trai-quach-main-khmer';
import TRAIQUACHQUANKM from '@/pages/tieng-khmer/foods/trai-quach/trai-quach-quan-khmer';
import BANHRAYQUANKM from '@/pages/tieng-khmer/foods/banh-ray/banh-ray-quan-khmer';
import BANHTETQUANKM from '@/pages/tieng-khmer/foods/banh-tet/banh-tet-quan-khmer';
import ForgotPassword from '@/pages/tiengviet/ForgotPassword';
import BUNNUOCLEOQUANKM from '@/pages/tieng-khmer/foods/bun-nuoc-leo/bun-nuoc-leo-quan-khmer';
import FAQ from '@/pages/FAQ';
import BANHCANHGAMETV from '@/pages/tiengviet/game/banh-canh/banh-canh-game-tv';
import BANHRAYGAMETV from '@/pages/tiengviet/game/banh-ray/banh-ray-game-tv';
import BANHTETGAMETV from '@/pages/tiengviet/game/banh-tet/banh-tet-game-tv';
import BUNNUOCLEOGAMETV from '@/pages/tiengviet/game/bun-nuoc-leo/bun-nuoc-leo-game-tv';
import BUNSUONGGAMETV from '@/pages/tiengviet/game/bun-suong/bun-suong-game-tv';
import CAKHOAIGAMETV from '@/pages/tiengviet/game/ca-khoai/ca-khoai-game-tv';
import CHAHOAGAMETV from '@/pages/tiengviet/game/cha-hoa/cha-hoa-game-tv';
import CHAOAMGAMETV from '@/pages/tiengviet/game/chao-am/chao-am-game-tv';
import CHUUGAMETV from '@/pages/tiengviet/game/chu-u/chu-u-game-tv';
import COMDEPGAMETV from '@/pages/tiengviet/game/com-dep/com-dep-game-tv';
import DUASAPGAMETV from '@/pages/tiengviet/game/dua-sap/dua-sap-game-tv';
import MAMBOHOCGAMETV from '@/pages/tiengviet/game/mam-bo-hoc/mam-bo-hoc-game-tv';
import NUOCMAMRUOIGAMETV from '@/pages/tiengviet/game/nuoc-mam-ruoi/nuoc-mam-ruoi-game-tv';
import TRAIQUACHGAMETV from '@/pages/tiengviet/game/trai-quach/trai-quach-game-tv';
import TONGHOPGAMETV from '@/pages/tiengviet/game/tong-hop/tong-hop-game-tv';
import VANHOAGAMETV from '@/pages/tiengviet/game/van-hoa/van-hoa-game-tv';
import BANHCANHGAMETA from '@/pages/tieng-anh/game/banh-canh/banh-canh-game-ta';
import BANHRAYGAMETA from '@/pages/tieng-anh/game/banh-ray/banh-ray-game-ta';
import BANHTETGAMETA from '@/pages/tieng-anh/game/banh-tet/banh-tet-game-ta';
import BUNNUOCLEOGAMETA from '@/pages/tieng-anh/game/bun-nuoc-leo/bun-nuoc-leo-game-ta';
import BUNSUONGGAMETA from '@/pages/tieng-anh/game/bun-suong/bun-suong-game-ta';
import CAKHOAIGAMETA from '@/pages/tieng-anh/game/ca-khoai/ca-khoai-game-ta';
import CHAHOAGAMETA from '@/pages/tieng-anh/game/cha-hoa/cha-hoa-game-ta';
import CHAOAMGAMETA from '@/pages/tieng-anh/game/chao-am/chao-am-game-ta';
import CHUUGAMETA from '@/pages/tieng-anh/game/chu-u/chu-u-game-ta';
import COMDEPGAMETA from '@/pages/tieng-anh/game/com-dep/com-dep-game-ta';
import DUASAPGAMETA from '@/pages/tieng-anh/game/dua-sap/dua-sap-game-ta';
import MAMBOHOCGAMETA from '@/pages/tieng-anh/game/mam-bo-hoc/mam-bo-hoc-game-ta';
import NUOCMAMRUOIGAMETA from '@/pages/tieng-anh/game/nuoc-mam-ruoi/nuoc-mam-ruoi-game-ta';
import TRAIQUACHGAMETA from '@/pages/tieng-anh/game/trai-quach/trai-quach-game-ta';
import TONGHOPGAMETA from '@/pages/tieng-anh/game/tong-hop/tong-hop-game-ta';
import VANHOAGAMETA from '@/pages/tieng-anh/game/van-hoa/van-hoa-game-ta';
import BANHCANHGAMEKM from '@/pages/tieng-khmer/game/banh-canh/banh-canh-game-khmer';
import BANHRAYGAMEKM from '@/pages/tieng-khmer/game/banh-ray/banh-ray-game-khmer';
import BANHTETGAMEKM from '@/pages/tieng-khmer/game/banh-tet/banh-tet-game-khmer';
import BUNNUOCLEOGAMEKM from '@/pages/tieng-khmer/game/bun-nuoc-leo/bun-nuoc-leo-game-khmer';
import BUNSUONGGAMEKM from '@/pages/tieng-khmer/game/bun-suong/bun-suong-game-khmer';
import CAKHOAIGAMEKM from '@/pages/tieng-khmer/game/ca-khoai/ca-khoai-game-khmer';
import CHAHOAGAMEKM from '@/pages/tieng-khmer/game/cha-hoa/cha-hoa-game-khmer';
import CHAOAMGAMEKM from '@/pages/tieng-khmer/game/chao-am/chao-am-game-khmer';
import CHUUGAMEKM from '@/pages/tieng-khmer/game/chu-u/chu-u-game-khmer';
import COMDEPGAMEKM from '@/pages/tieng-khmer/game/com-dep/com-dep-game-khmer';
import DUASAPGAMEKM from '@/pages/tieng-khmer/game/dua-sap/dua-sap-game-khmer';
import MAMBOHOCGAMEKM from '@/pages/tieng-khmer/game/mam-bo-hoc/mam-bo-hoc-game-khmer';
import NUOCMAMRUOIGAMEKM from '@/pages/tieng-khmer/game/nuoc-mam-ruoi/nuoc-mam-ruoi-game-khmer';
import TRAIQUACHGAMEKM from '@/pages/tieng-khmer/game/trai-quach/trai-quach-game-khmer';
import TONGHOPGAMEKM from '@/pages/tieng-khmer/game/tong-hop/tong-hop-game-khmer';
import VANHOAGAMEKM from '@/pages/tieng-khmer/game/van-hoa/van-hoa-game-khmer';
import Question from '@/pages/tiengviet/question/question';
import Download from '@/pages/tiengviet/download';
import Categories from '@/pages/tiengviet/categories';


export const routes = [
    {
        path: '/account',
        element: <Account />,
    },     
    {
        path:'/download',
        element: <Download/>,
    },
    { 
        path: '/tieng-viet',
        element: <RootLayout />,
        children: [
                    { index: true, element: <Home /> },
                    {path: 'categories', element: <Categories />},
                    {
                        path: 'forgot-password',
                        element: <ForgotPassword />,
                    },
                    {
                        path: 'feedbacks',
                        element: <Feedbacks />,
                    },
                    {
                        path: 'faq',
                        element: <FAQ />,
                    },
                    {
                        path: 'create-feedback',
                        element: <CreateFeedback />,
                    },
                    {
                        path: 'question',
                        element: <Question />,
                    },
                    {
                        path: 'mon-an',
                        children: [
                            {
                                path: 'bun-suong',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BUNSUONGMAINTV />,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BUNSUONGQUANTV />,
                                    },
                                ],
                            },
                            {
                                path: 'banh-canh',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHCANHMAINTV />,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHCANHQUANTV />,
                                    },
                                    
                                ],
                            },
                            {
                                path: 'banh-ray',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHRAYMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHRAYQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'banh-tet',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHTETMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHTETQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'bun-nuoc-leo',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BUNNUOCLEOMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BUNNUOCLEOQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'ca-khoai',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CAKHOAIMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CAKHOAIQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'cha-hoa',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHAHOAMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHAHOAQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'chao-am',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHAOAMMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHAOAMQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'chu-u',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHUUMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHUUQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'com-dep',
                                children: [
                                    {
                                        path: 'main',
                                        element: <COMDEPMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <COMDEPQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'dua-sap',
                                children: [
                                    {
                                        path: 'main',
                                        element: <DUASAPMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <DUASAPQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'mam-bo-hoc',
                                children: [
                                    {
                                        path: 'main',
                                        element: <MAMBOHOCMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <MAMBOHOCQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'nuoc-mam-ruoi',
                                children: [
                                    {
                                        path: 'main',
                                        element: <NUOCMAMRUOIMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <NUOCMAMRUOIQUANTV/>,
                                    },
                                ],
                            },
                            {
                                path: 'trai-quach',
                                children: [
                                    {
                                        path: 'main',
                                        element: <TRAIQUACHMAINTV/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <TRAIQUACHQUANTV/>,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        path: 'game',
                        children: [
                            {
                                path: 'banh-canh',
                                element: <BANHCANHGAMETV />,
                            },
                            {
                                path: 'banh-ray',
                                element: <BANHRAYGAMETV/>,
                            },
                            {
                                path: 'banh-tet',
                                element: <BANHTETGAMETV />,
                            },
                            {
                                path: 'bun-nuoc-leo',
                                element: <BUNNUOCLEOGAMETV/>,
                            },
                            {
                                path: 'bun-suong',
                                element: <BUNSUONGGAMETV />,
                            },
                            {
                                path: 'ca-khoai',
                                element: <CAKHOAIGAMETV />,
                            },
                            {
                                path: 'cha-hoa',
                                element: <CHAHOAGAMETV/>,
                            },
                            {
                                path: 'chao-am',
                                element: <CHAOAMGAMETV />,
                            },
                            {
                                path: 'chu-u',
                                element: <CHUUGAMETV />,
                            },
                            {
                                path: 'com-dep',
                                element: <COMDEPGAMETV />,
                            },
                            {
                                path: 'dua-sap',
                                element: <DUASAPGAMETV/>,
                            },
                            {
                                path: 'mam-bo-hoc',
                                element: <MAMBOHOCGAMETV />,
                            },
                            {
                                path: 'nuoc-mam-ruoi',
                                element: <NUOCMAMRUOIGAMETV />,
                            },
                            {
                                path: 'trai-quach',
                                element: <TRAIQUACHGAMETV />,
                            },
                            {
                                path: 'tong-hop',
                                element: <TONGHOPGAMETV />,
                            },
                            {
                                path: 'van-hoa',
                                element: <VANHOAGAMETV />,
                            },
                        ],
                    },
                    {
                        path: 'van-hoa',
                        children: [
                            {
                                path: 'con-nguoi',
                                element: <ConNguoiTV />,
                            },
                            {
                                path: 'dia-ly',
                                element: <DIALYTV/>,
                            },
                            {
                                path: 'khi-hau',
                                element: <KHIHAUTV/>,
                            },
                            {
                                path: 'lich-su',
                                element: <LICHSUTV/>,
                            },
                            {
                                path: 'tai-nguyen',
                                element: <TAINGUYENTV/>,
                            },
                            {
                                path: 'thien-nhien',
                                element: <THIENNHIENTV/>,
                            },
                        ],
                        
                    },
                    {
                        path: 'hdsd',
                        element: <Hdsd />,
                    },
                    { path: '*', element: <NotFound /> },
        ], 
    },
    {
        path: '/tieng-anh',
        element: <RootLayout />,
        children:[
                    { index: true, element: <Home /> },
                    {
                        path: 'game',
                        children: [
                            {
                                path: 'banh-canh',
                                element: <BANHCANHGAMETA />,
                            },
                            {
                                path: 'banh-ray',
                                element: <BANHRAYGAMETA/>,
                            },
                            {
                                path: 'banh-tet',
                                element: <BANHTETGAMETA />,
                            },
                            {
                                path: 'bun-nuoc-leo',
                                element: <BUNNUOCLEOGAMETA/>,
                            },
                            {
                                path: 'bun-suong',
                                element: <BUNSUONGGAMETA />,
                            },
                            {
                                path: 'ca-khoai',
                                element: <CAKHOAIGAMETA />,
                            },
                            {
                                path: 'cha-hoa',
                                element: <CHAHOAGAMETA/>,
                            },
                            {
                                path: 'chao-am',
                                element: <CHAOAMGAMETA />,
                            },
                            {
                                path: 'chu-u',
                                element: <CHUUGAMETA />,
                            },
                            {
                                path: 'com-dep',
                                element: <COMDEPGAMETA />,
                            },
                            {
                                path: 'dua-sap',
                                element: <DUASAPGAMETA/>,
                            },
                            {
                                path: 'mam-bo-hoc',
                                element: <MAMBOHOCGAMETA />,
                            },
                            {
                                path: 'nuoc-mam-ruoi',
                                element: <NUOCMAMRUOIGAMETA />,
                            },
                            {
                                path: 'trai-quach',
                                element: <TRAIQUACHGAMETA />,
                            },
                            {
                                path: 'tong-hop',
                                element: <TONGHOPGAMETA />,
                            },
                            {
                                path: 'van-hoa',
                                element: <VANHOAGAMETA />,
                            },
                        ],
                    },
                    {
                        path: 'van-hoa',
                        children: [
                            {
                                path: 'con-nguoi',
                                element: <CONNGUOITA />,
                            },
                            {
                                path: 'dia-ly',
                                element: <DIALYTA/>,
                            },
                            {
                                path: 'khi-hau',
                                element: <KHIHAUTA/>,
                            },
                            {
                                path: 'lich-su',
                                element: <LICHSUTA/>,
                            },
                            {
                                path: 'tai-nguyen',
                                element: <TAINGUYENTA/>,
                            },
                            {
                                path: 'thien-nhien',
                                element: <THIENNHIENTA/>,
                            },
                        ],   
                    },
                    {
                        path: 'mon-an',
                        children: [
                            {
                                path: 'bun-suong',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BUNSUONGMAINTA />,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BUNSUONGQUANTA />,
                                    },
                                ],
                            },
                            {
                                path: 'banh-canh',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHCANHMAINTA />,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHCANHQUANTA />,
                                    },
                                ],
                            },
                            {
                                path: 'banh-ray',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHRAYMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHRAYQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'banh-tet',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHTETMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHTETQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'bun-nuoc-leo',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BUNNUOCLEOMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BUNNUOCLEOQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'ca-khoai',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CAKHOAIMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CAKHOAIQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'cha-hoa',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHAHOAMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHAHOAQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'chao-am',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHAOAMMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHAOAMQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'chu-u',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHUUMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHUUQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'com-dep',
                                children: [
                                    {
                                        path: 'main',
                                        element: <COMDEPMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <COMDEPQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'dua-sap',
                                children: [
                                    {
                                        path: 'main',
                                        element: <DUASAPMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <DUASAPQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'mam-bo-hoc',
                                children: [
                                    {
                                        path: 'main',
                                        element: <MAMBOHOCMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <MAMBOHOCQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'nuoc-mam-ruoi',
                                children: [
                                    {
                                        path: 'main',
                                        element: <NUOCMAMRUOIMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <NUOCMAMRUOIQUANTA/>,
                                    },
                                ],
                            },
                            {
                                path: 'trai-quach',
                                children: [
                                    {
                                        path: 'main',
                                        element: <TRAIQUACHMAINTA/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <TRAIQUACHQUANTA/>,
                                    },
                                ],
                            },
                        ],
                    },
        ],
    },
    {
        path: '/tieng-khmer',
        element: <RootLayout />,
        children:[
                    { index: true, element: <Home /> },
                    {
                        path: 'game',
                        children: [
                            {
                                path: 'banh-canh',
                                element: <BANHCANHGAMEKM />,
                            },
                            {
                                path: 'banh-ray',
                                element: <BANHRAYGAMEKM/>,
                            },
                            {
                                path: 'banh-tet',
                                element: <BANHTETGAMEKM />,
                            },
                            {
                                path: 'bun-nuoc-leo',
                                element: <BUNNUOCLEOGAMEKM/>,
                            },
                            {
                                path: 'bun-suong',
                                element: <BUNSUONGGAMEKM />,
                            },
                            {
                                path: 'ca-khoai',
                                element: <CAKHOAIGAMEKM />,
                            },
                            {
                                path: 'cha-hoa',
                                element: <CHAHOAGAMEKM/>,
                            },
                            {
                                path: 'chao-am',
                                element: <CHAOAMGAMEKM />,
                            },
                            {
                                path: 'chu-u',
                                element: <CHUUGAMEKM />,
                            },
                            {
                                path: 'com-dep',
                                element: <COMDEPGAMEKM />,
                            },
                            {
                                path: 'dua-sap',
                                element: <DUASAPGAMEKM/>,
                            },
                            {
                                path: 'mam-bo-hoc',
                                element: <MAMBOHOCGAMEKM />,
                            },
                            {
                                path: 'nuoc-mam-ruoi',
                                element: <NUOCMAMRUOIGAMEKM />,
                            },
                            {
                                path: 'trai-quach',
                                element: <TRAIQUACHGAMEKM />,
                            },
                            {
                                path: 'tong-hop',
                                element: <TONGHOPGAMEKM />,
                            },
                            {
                                path: 'van-hoa',
                                element: <VANHOAGAMEKM />,
                            },
                        ],
                    },
                    {
                        path: 'van-hoa',
                        children: [
                            {
                                path: 'con-nguoi',
                                element: <ConNguoiKM />,
                            },
                            {
                                path: 'dia-ly',
                                element: <DIALYKM/>,
                            },
                            {
                                path: 'khi-hau',
                                element: <KHIHAUKM/>,
                            },
                            {
                                path: 'lich-su',
                                element: <LICHSUKM/>,
                            },
                            {
                                path: 'tai-nguyen',
                                element: <TAINGUYENKM/>,
                            },
                            {
                                path: 'thien-nhien',
                                element: <THIENNHIENKM/>,
                            },
                        ],
                        
                    },
                    {
                        path: 'mon-an',
                        children: [
                            {
                                path: 'bun-suong',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BUNSUONGMAINKM />,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BUNSUONGQUANKM />,
                                    },
                                ],
                            },
                            {
                                path: 'banh-canh',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHCANHMAINKM />,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHCANHQUANKM />,
                                    },
                                ],
                            },
                            {
                                path: 'banh-ray',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHRAYMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHRAYQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'banh-tet',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BANHTETMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BANHTETQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'bun-nuoc-leo',
                                children: [
                                    {
                                        path: 'main',
                                        element: <BUNNUOCLEOMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <BUNNUOCLEOQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'ca-khoai',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CAKHOAIMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CAKHOAIQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'cha-hoa',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHAHOAMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHAHOAQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'chao-am',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHAOAMMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHAOAMQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'chu-u',
                                children: [
                                    {
                                        path: 'main',
                                        element: <CHUUMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <CHUUQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'com-dep',
                                children: [
                                    {
                                        path: 'main',
                                        element: <COMDEPMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <COMDEPQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'dua-sap',
                                children: [
                                    {
                                        path: 'main',
                                        element: <DUASAPMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <DUASAPQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'mam-bo-hoc',
                                children: [
                                    {
                                        path: 'main',
                                        element: <MAMBOHOCMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <MAMBOHOCQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'nuoc-mam-ruoi',
                                children: [
                                    {
                                        path: 'main',
                                        element: <NUOCMAMRUOIMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <NUOCMAMRUOIQUANKM/>,
                                    },
                                ],
                            },
                            {
                                path: 'trai-quach',
                                children: [
                                    {
                                        path: 'main',
                                        element: <TRAIQUACHMAINKM/>,
                                    },
                                    {
                                        path: 'quan',
                                        element: <TRAIQUACHQUANKM/>,
                                    },
                                ],
                            },
                        ],
                },
        ],  
    },
    
];
