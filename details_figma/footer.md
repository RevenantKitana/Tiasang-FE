//footer details

footer
{
    width: 1920px;
    height: 274px;

    line
    {
        width: 1920px;
        height: 1px;
        background: var(--icon-fill-on-white, #0D1013);
    }

    frame danh mục // Footer 1
    {
        display: flex;
        width: 1098px;
        justify-content: center;
        align-items: center;
        gap: 15px;


        ![alt text](image/image-6.png) //Home icon
        {
            width: 18px;
            height: 18px;
            flex-shrink: 0;
        }

        "Chuyên đề"; "Khoa học - Công nghệ"; ...
        {
            color: var(--text-regular, #202020);
            text-align: center;

            /* lead 15 */
            font-family: Archivo;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%; /* 24px */
        }
    }
    footer 2
    {
        width: 1101px;
        height: 198.5px;

        line
        {
            width: 1100px;
            height: 1px;

            background: var(--border-subdued, #D6D6D6);
        }
        
        content-footer2
        {
            display: flex;
            width: 855px;
            justify-content: space-between;
            align-items: center;

            content1
            {
                ![alt text](image/Logo.png) //lề trái
                {
                    width: 138px;
                    height: 45px;
                    flex-shrink: 0;
                    aspect-ratio: 46/15;
                }
            }

            navigation
            {
                display: flex;
                width: 308px;
                align-items: center;
                gap: 10px;
                flex-shrink: 0;

                "Trở lại Vnexpress"/ "Giới thiệu Tia Sáng" / "Tia Sáng RSS //Ngăn cách bởi line
                {


                    text
                    {
                        color: var(--text-regular, #202020);

                        /* lead 15 */
                        font-family: Archivo;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 160%; /* 24px */
                    }

                    line
                    {
                        width: 1px;
                        height: 14px;

                        background: var(--border-subdued, #D6D6D6);
                    }
                }

                Social: FB/Youtube/Link // cũng là 1 phần navigation, ngăn cách bởi line
                {
                    width: 157.398px;
                    height: 30px;

                    "Social"
                    {
                        display: flex;
                        width: 48px;
                        height: 14px;
                        flex-direction: column;
                        justify-content: center;

                        color: var(--text-regular, #202020);

                        /* lead 15 */
                        font-family: Archivo;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 160%; /* 24px */
                    }
                    icon-unit // Facebook/Youtube/Link
                    {
                        rectangle
                        {
                            width: 30px;
                            height: 30px;

                            border-radius: 46px;
                            border: 1px solid #233DB3;
                            background: #FFF;
                        }
                        icon-social
                        {
                            ...
                        }
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
        content-footer-3
        {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            align-self: stretch;

            details-1
            {
                text-1
                {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    "Tia Sáng"
                    {
                        width: 416px;

                        color: var(--text-regular, #202020);
                        font-family: Archivo;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 160%; /* 25.6px */
                    }

                    "Chuyên trang tri thức của VnExpress"
                    {
                        width: 416px;

                        color: var(--text-regular, #202020);

                        /* 14/140/re */
                        font-family: Archivo;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%; /* 19.6px */
                    }
                }
                text2-"Tổng biên tập: Phạm Văn Hiếu"
                {
                    align-self: stretch;

                    color: var(--text-regular, #202020);

                    /* lead 15 */
                    font-family: Archivo;
                    font-size: 15px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 160%; /* 24px */
                }
            }

            details-2 "Địa chỉ: Tầng 10, Tòa A FPT Tower,  số 10 Phạm Văn Bạch, phường Cầu Giấy, Hà Nội Điện thoại: (024) 39428445 Email: tiasang@vnexpress.net"
            {
                width: 387px;

                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 2px;
                flex: 1 0 0;

                color: var(--text-regular, #202020);

                /* lead 15 */
                font-family: Archivo;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 160%; /* 24px */
            }

            details-3 "© 2025. Toàn bộ bản quyền thuộc về Tia Sáng"
            {
                width: 308px;

                color: var(--text-regular, #202020);
                text-align: right;

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