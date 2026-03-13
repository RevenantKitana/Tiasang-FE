
///Mô tả là giả mã logic
Body
{
    display: flex;
    align-items: flex-start;
    gap: 80px;
    align-self: stretch;
    Body-1
    {   
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        align-self: stretch;
        color #5F5F5F //Lưu ý///////////////


        feature-news
        {   
            width: 1100px;
            height: 432px;
            color #5F5F5F //Lưu ý///////////////
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;

            content
            {
                display: flex;
                width: 320px;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                color #5F5F5F //Lưu ý nền có kích thước đúng bằng 1100*432!!!!

                image
                {
                    width: 720px;
                    height: 432px;

                    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
                }

                title
                {
                    align-self: stretch;

                    color: #101010;
                    font-family: Merriweather;
                    font-size: 28px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 160%; /* 44.8px */
                }
                text
                {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 6px;
                    align-self: stretch;

                    details text
                    {
                        align-self: stretch;

                        color: var(--text-article-lead, #5F5F5F);

                        /* lead 15 */
                        font-family: Archivo;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 160%; /* 24px */
                    }

                    infor text
                    {
                        align-self: stretch;

                        color: var(--text-article-lead, #5F5F5F);

                        /* lead 15 */
                        font-family: Archivo;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 160%; /* 24px */
                    }
                }
            }
        }

        line
        {
            width: 1100px;
            height: 1px;

            background: var(--border-subdued, #D6D6D6);
        }
    }
    Body-2
    {   
        display: flex;
        align-items: flex-start;
        gap: 80px;
        align-self: stretch;

        main-list
        {
            width: 720px;
            height: 2475px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            align-self: stretch;

            content-packs //có 2 gói, mỗi gói gồm 5 tin nhỏ liên tiếp và 1 quảng cáo
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 30px;
                align-self: stretch;

                news unit content(sample) //xuất hiện 5 lần (*5 LẦN)
                {
                    display: flex;
                    width: 720px;
                    align-items: flex-start;
                    gap: 20px;

                    image
                    {

                        width: 250px;
                        height: 150px;
                        flex-shrink: 0;
                        aspect-ratio: 5/3;

                        background: url(<path-to-image>) lightgray 50% / cover no-repeat;
                    }

                    details
                    {
                        display: flex;
                        width: 450px;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        gap: 5px;
                        flex-shrink: 0;

                        content-text
                        {
                            display: flex;
                            width: 450px;
                            flex-direction: column;
                            justify-content: center;
                            align-items: flex-start;
                            gap: 5px;
                            flex-shrink: 0;

                            title
                            {
                                width: 450px;

                                color: var(--title, #101010);

                                /* Mer/22/bold */
                                font-family: Merriweather;
                                font-size: 22px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 160%; /* 35.2px */
                            }

                            text
                            {
                                color: #5F5F5F;

                                /* 15/140/re */
                                font-family: Archivo;
                                font-size: 15px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 140%; /* 21px */
                            }

                            author
                            {
                                color: #5F5F5F;

                                /* Title tác giả */
                                font-family: Archivo;
                                font-size: 15px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 140%; /* 21px */
                            }
                        }
                    }

                    line // Line cũng sẽ xuất hiện sau khi hết quảng cáo
                    {
                        width: 720px;
                        height: 1px;

                        background: var(--border-subdued, #D6D6D6);
                    }
                }
                ads //LƯU Ý :xuất hiện mỗi 5 lần bài viết xuất hiện ******* PHẢI HIỂN THỊ ĐƯỢC
                {
                    display: flex;
                    padding-right: 20px;
                    align-items: flex-start;
                    gap: 16px;
                    align-self: stretch;
                    
                    ads-image
                    {
                        width: 240px;
                        height: 144px;

                        background: url(<path-to-image>) lightgray 50% / cover no-repeat;
                    }

                    ads-content
                    {   
                        display: flex;
                        width: 450px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;

                        ads-details
                        {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 4px;
                            align-self: stretch;

                            ads-title
                            {
                                width: 450px;

                                color: var(--title, #101010);
                                font-family: Merriweather;
                                font-size: 20px;
                                font-style: normal;
                                font-weight: 700;
                                line-height: 160%; /* 32px */
                            }

                            ads-text
                            {   
                                display: flex;
                                flex-direction: column;
                                align-items: flex-start;
                                align-self: stretch;
                                
                                text{
                                /* 14/160 */
                                font-family: Archivo;
                                font-size: 14px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 160%; /* 22.4px */}
                            }

                        }
                        meta-data
                        {
                            display: flex;
                            align-items: center;
                            gap: 6px;

                            icon
                            {
                                width: 17px;
                                height: 16px;
                            }

                            text
                            {
                                color: #5F5F5F;

                                /* Arial in Form/Regular/12 */
                                font-family: Arial;
                                font-size: 12px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: normal;
                            }
                        }
                    }
                }
            }

        }

        side-bar
        {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 30px;

           ads-side-bar
           {
                image
                {
                    width: 300px;
                    height: 600px;

                    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #F2C94C;
                }
           }
            box(có 2 box là KH-CN ; VH - XH cấu trúc tương tự nhau)
                {
                    width: 300px;
                    height: 618px;

                    border: 1px solid var(--border-subdued, #D6D6D6);
                    background: #FFF;

                    title-box ("Khoa học và Công nghệ"/ "Văn hóa và Xã hội")
                    {
                        width: 260px;

                        color: var(--text-article-title, #202020);

                        /* 18/bold */
                        font-family: Merriweather;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 160%; /* 28.8px */
                    }

                    content-box
                    {

                        display: flex;
                        width: 260px;
                        height: 533px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 14px;

                        news
                        {
                            display: flex;
                            width: 260px;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 14px;

                            feature-news
                            {

                                image-feature-news
                                {
                                    width: 260px;
                                    height: 155.831px;

                                    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
                                }

                                content-feature-news
                                {
                                    display: flex;
                                    width: 260px;
                                    flex-direction: column;
                                    align-items: flex-start;
                                    gap: 4px;

                                    title
                                    {
                                        width: 260px;

                                        color: var(--text-article-title, #202020);

                                        /* 18/bold */
                                        font-family: Merriweather;
                                        font-size: 18px;
                                        font-style: normal;
                                        font-weight: 700;
                                        line-height: 160%; /* 28.8px */
                                    }

                                    author
                                    {
                                        align-self: stretch;

                                        color: var(--text-article-lead, #5F5F5F);
                                        font-family: Archivo;
                                        font-size: 14px;
                                        font-style: normal;
                                        font-weight: 400;
                                        line-height: 160%; /* 22.4px */
                                    }
                                }
                                
                                line
                                {
                                    width: 260px;
                                    height: 1px;

                                    background: var(--border-subdued, #D6D6D6);
                                }
                            }
                            other-news list(có 2 tin khác trong box)
                            {
                                display: flex;
                                width: 260px;
                                flex-direction: column;
                                justify-content: center;
                                align-items: flex-start;
                                gap: 14px;

                                other-news-sample
                                {
                                    display: flex;
                                    width: 260px;
                                    align-items: center;
                                    gap: 10px;

                                    media
                                    {
                                        width: 110px;
                                        height: 66px;
                                        flex-shrink: 0;

                                        image
                                        {
                                            width: 110px;
                                            height: 66px;
                                            aspect-ratio: 5/3;

                                            background: url(<path-to-image>) lightgray 50% / cover no-repeat;
                                        }

                                        video
                                        {
                                            width: 18px;
                                            height: 18px;
                                            aspect-ratio: 1/1;

                                            border-radius: 3px;
                                            background: rgba(0, 0, 0, 0.60);

                                            icon-play
                                            {
                                                width: 9.6px;
                                                height: 9.6px;
                                                aspect-ratio: 9.60/9.60;
                                            }
                                        }
                                    }

                                    title
                                    {
                                        width: 135px;
                                        height: 72px;
                                        flex-shrink: 0;

                                        color: var(--text-article-title, #202020);
                                        font-family: Merriweather;
                                        font-size: 14px;
                                        font-style: normal;
                                        font-weight: 700;
                                        line-height: 160%; /* 22.4px */
                                    }
                                }
                                line
                                {
                                    width: 260px;
                                    height: 1px;

                                    background: var(--border-subdued, #D6D6D6);
                                }
                            }
                        }

                        read-more
                        {
                            display: flex;
                            width: 260px;
                            height: 40px;
                            padding: 10px 120px;
                            justify-content: center;
                            align-items: center;
                            gap: 10px;
                            flex-shrink: 0;

                            border-radius: 3px;
                            border: 1px solid var(--border-subdued, #D6D6D6);
                            background: #FFF;

                             "Xem thêm" //Phải được bố cục viết ngang, không bị viết dọc ****
                             {
                                color: var(--text-regular-lighter, #5F5F5F);
                                font-family: Archivo;
                                font-size: 14px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 160%; /* 22.4px */
                             }

                        }
                    }
                }
        }
    }
    pages-index
    {
        display: flex;
        align-items: center;
        gap: 10px;

        unit{
            width: 40px;
            height: 40px;
            //Bôi đậm nền là trang đang trỏ tới ; 1, 2, 3, 4, >

            "1"
            {
                width: 17px;

                color: var(--text-regular, #202020);
                text-align: center;
                font-family: Archivo;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 24px */
            }

        }
    }
    body 3 //ads
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;

        ads-banner-link //Clickable banner
        {
            width: 970px;
            height: 233px;
            display: flex;
            text-decoration: none;
            cursor: pointer;

            image-ads
            {
                width: 970px;
                height: 233px;
                aspect-ratio: 970/233;

                background: url(<path-to-image>) lightgray 50% / cover no-repeat;
                
                //Hover effect
                transition: opacity 0.3s ease;
                
                &:hover
                {
                    opacity: 0.9;
                }
            }
        }
    }
}