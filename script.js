document.addEventListener('DOMContentLoaded', function() {
    const photoData = {
        "北遠見台": {
            src: "11.jpg",
            description: [
                "🗓️ 23. 11 北遠見台 ",
                "끝없이 펼쳐진 바다를 보며, 저 먼 수평선 너머에는 무엇이 있을지 생각에 잠겼던 하루였어요!",
                "남우현의 선인장을 추천해요 🎧",
                "🔎 Hidden Gems",
                "🛀 琉球温泉瀬長島ホテル : 착륙하는 비행기를 바라보며 온천을 즐길 수 있어요!"
            ],
            video: "https://www.youtube.com/embed/B9r19gxg6PM"
        },
        "여의도 물빛광장": {
            src: "여의도 물빛광장.jpg",
            description: [
                "🗓️ 23. 07 여의도 물빛광장 ",
                "저물어가는 하늘의 빛이 마음 깊숙이 스며들며",
                "나연의 LOVE COUNTDOWN을 추천해요 🎧",
                "🔎 Hidden Gems",
                "☕️ 강변서재 : 한강을 배경으로 책 한 권과 커피 한 잔은 너무 행복하죠...🤍"
            ],
            video: "https://www.youtube.com/embed/D6KP4btz2eY"
        },
        "北浜ビーチ": {
            src: "14.jpg",
            description: [
                "🗓️ 23. 11 北浜ビーチ",
                "이리저리 흔들리며 앞으로 나아가는 그 모든 순간이 아름다운 여행이 되는 것 같아요",
                "혁오의 반딧불을 추천해요 🎧",
                "🔎 Hidden Gems",
                "🚏 ちゅらチャリ라는 공유 자전거를 타고 오키나와에서 즐거운 시간을!"
            ],
            video: "https://www.youtube.com/embed/UZjGcAjd8Ok"
        },
        "낙산공원": {
            src: "낙산공원.jpg",
            description: [
                "🗓️ 24. 10 낙산공원",
                "서울이 내게 속삭이는 듯한 고요한 밤이 시작되면", 
                "오직 바람에 스쳐 가는 잔잔한 소리만이 마음을 어루만져요",
                "OFFICIAL HIGE DANDISM의 Pretender을 추천해요 🎧",
                "🔎 Hidden Gems",
                "💬 혜화역에서 걸어 올라가지 말고, 동대문 쪽에서 버스타고 가세요!"
            ],
            video: "https://www.youtube.com/embed/MxkGHm6jcsw"
        },
        "도공로": {
            src: "도공로.jpg",
            description: [
                "🗓️ 23. 07 도공로 ",
                "뜨거운 여름, 자전거를 타고 제주도를 돌아다녔어요!",
                "페퍼톤스의 라이더스를 추천해요 🎧",
                "🔎 Hidden Gems",
                "🚏 제주공항 뒷길이 자전거 타기 좋아요!"
            ],
            video: "https://www.youtube.com/embed/Xa5AeVWT2AY"
        },
        "덕수궁": {
            src: "덕수궁.jfif",
            description: [
                "🗓️ 24. 06 덕수궁 ",
                "본격 여름이 시작되기 전 찍었던 사진이에요!",
                "데이식스의 오늘은 내게를 추천해요 🎧",
                "🔎 Hidden Gems",
                "☕️ 커피앤시가렛 : 여기는 뷰가 너무 좋아요..🤍",
                "🍙 화포식당 : 회식 때 혼자서 4인분 먹고...🤫"
            ],
            video: "https://www.youtube.com/embed/v13D8TCmvBQ"
        },
        "CASHMERE": {
            src: "캐시미어.jfif",
            description: [
                "🗓️ 24. 04 cafe cashmere ",
                "오래된 건물들 사이로 커피의 따뜻함이 조용히 퍼져나가며",
                "샘김의 It's you를 추천해요 🎧",
                "🔎 Hidden Gems",
                "🍙 진중 우육면관 : 수교까지 같이 시켜먹으면 여기가 타이완? 🇹🇼"
            ],
            video: "https://www.youtube.com/embed/3Uyl_ifBiLE"
        },
        "올림픽공원": {
            src: "올림픽공원.jpg",
            description: [
                "🗓️ 24. 11 올림픽공원 ",
                "홀로 서 있는 그 나무는 시간의 흐름과 계절의 변화를 묵묵히 견디며 우뚝 서 있어요",
                "도유카의 Favorite Clothes 추천해요 🎧",
                "🔎 Hidden Gems",
                "💬 나홀로 나무에서 열심히 걸어가서 들꽃마루에서 꽃까지 보고와요"
            ],
            video: "https://www.youtube.com/embed/ErQzRXM05MI"
        },
        "양화한강공원": {
            src: "양화한강공원.jfif",
            description: [
                "🗓️ 24. 10 양화한강공원 ",
                "홀로 서 있는 그 나무는 시간의 흐름과 계절의 변화를 묵묵히 견디며 우뚝 서 있어요",
                "잔나비의 꿈나라 별나라를 추천해요 🎧",
                "🔎 Hidden Gems",
                "💬 당산역 4번 출구 쪽, 양화한강공원으로 이어진 육교에서 바라본 풍경이 예뻐요"
            ],
            video: "https://www.youtube.com/embed/ClB12Wlt4pw"
        }

    };

    const photos = document.querySelectorAll('.photo img');
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    const popupVideo = document.getElementById('popup-video');
    const popupClose = document.getElementById('popup-close');
    const photoDescription = document.getElementById('photo-description'); 

    popup.style.display = 'none';

    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            popup.style.display = 'flex';
            const altText = this.alt;

            if (photoData[altText]) {
                popupImg.src = photoData[altText].src;

                photoDescription.innerHTML = '';

                if (Array.isArray(photoData[altText].description)) {
                    photoData[altText].description.forEach((desc, index) => {
                        const descElement = document.createElement('p');
                        descElement.textContent = desc;

                        if (desc.includes("Hidden Gems")) {
                            descElement.style.marginTop = "10px"; 
                        }

                        photoDescription.appendChild(descElement);
                    });
                } else {
                    photoDescription.textContent = photoData[altText].description;
                }

                popupVideo.src = photoData[altText].video + "?autoplay=1";
            } else {
                photoDescription.textContent = "설명 정보가 없습니다.";
                popupVideo.src = "";
            }
        });
    });

    popupClose.addEventListener('click', function() {
        popup.style.display = 'none';
        popupVideo.src = ""; 
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            popupVideo.src = ""; 
        }
    });
});