<template>
    <header class="header">
        <div class="header__left-column">

            <div class="header__logo">
                <img src="../assets/logo.png" alt="logo">
            </div>

            <div class="header__sub-logo">
                Inform. Connect. Inspire.
            </div>

        </div>

        <div class="header__right-column">

            <div class="header__top-bar">
                <a href="#">Über uns</a>
                <a href="#">Redaktion</a>

                <div class="lang-switch">
                    <div class="lang-item">de</div>
                    <div class="lang-item active">en</div>
                </div>

            </div>

            <nav class="header__nav-bar">

                <ul class="nav">
                    <li>
                        <a href="#"><img src="../assets/Icon-Suche.png" alt="search"></a>
                    </li>
                    <li><a href="#">DEsign+lifestyle</a></li>
                    <li><a href="#">trends</a></li>
                    <li><a href="#">infodelight</a></li>
                    <li><a href="#">Smart Living</a></li>
                </ul>

            </nav>

        </div>
    </header>
</template>

<style lang="scss">
    .header {
        color: $lightShaft;
        display: flex;
        height: 120px;
        padding: 15px 35px;
        justify-content: space-between;

        &__left-column {
            padding-top: 35px;
        }

        &__sub-logo {
            color: $darkShaft;
            font-family: "RobotoLight";
            font-size: 14px;
            font-weight: 400;
            line-height: 50.24px;
            letter-spacing: 0.49px;
        }

        &__top-bar {
            align-items: center;
            display: flex;
            justify-content: flex-end;
            margin-bottom: 40px;
            font-family: 'VerdanaRegular', sans-serif;
            font-size: 14px;
            font-weight: 400;

            a {
                display: inline-block;
                margin-right: 25px;
            }

            .lang-item {
                border: 1px solid #d8d8d8;
                color: $silver;
                cursor: pointer;
                display: inline-block;
                padding: 3px;
                transition: .5s;

                &.active {
                    border: 1px solid $black;
                    color: $lightShaft;
                }

                &:hover {
                    background: $black;
                    color: $white;
                }
            }
        }

        &__nav-bar {
            font-family: "RobotoRegular";
            font-size: 16px;
            font-weight: 400;
            text-transform: uppercase;

            .nav {
                display: flex;
                align-items: center;
            }

            li {
                a {
                    padding: 0 25px;
                    border-left: 1px solid $black;
                    display: inline-block;
                }

                img {
                    height: 25px;
                    width: 25px;
                    position: relative;
                    top: 5px;
                }

                &:first-child a {
                    border-left: none;
                }

                &:last-child a {
                    padding-right: 0;
                }
            }
        }
    }
</style>