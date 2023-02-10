//navbar
const navbar = `
        <header class="header">
            <a href="#" class="profile"><span>FitLife</span></a>

            <nav class="navbar">
                <a href="#"><span>Home</span></a>
                <a href="#"><span>About </span></a>
                <a href="#"><span>Programs</span></a>
                <a href="#"><span>Reviews</span></a>
                <a href="#"><span>Blog</span></a>
                <a href="#" class="login"><span>Log in</span></a>
            </nav>
            <div class="menu-btn" href="#"><img src ="menu.png"></div>

        </header>
`;

document.body.innerHTML = navbar;
export default navbar;

