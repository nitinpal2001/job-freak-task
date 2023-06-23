function showContent(component) {
    var contentElement = document.getElementById("content");

    switch (component) {
        case "home":
            contentElement.innerHTML = "<div><h1>Welcome to Job Freak</h1><p>Discover the best solutions for your needs</p><button>Get Started</button></div>";
            break;
        case "contact":
            contentElement.innerHTML = "<h2>Contact Us</h2><p>If you have any questions or inquiries, feel free to reach out to us:</p><ul><li>Email: info@example.com</li><li>Phone: +1 123-456-7890</li><li>Address: 123 Main Street, City, State, Country</li></ul>";
            break;
        case "information":
            contentElement.innerHTML = "<section><h2>Welcome to Our Company</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut felis id urna fringilla condimentum. Sed eleifend consequat sollicitudin. Nullam a mauris tristique, finibus urna eget, facilisis mauris. Vestibulum ultrices mauris a massa venenatis, et ullamcorper dolor interdum. Nulla facilisi.</p></section><section><h2>Our Mission</h2><p>Our mission is to provide high-quality products/services that exceed customer expectations. We strive to deliver innovative solutions tailored to our clients' needs and foster long-term partnerships based on trust and reliability.</p></section><section><h2>Our Team</h2><p>We are a dedicated team of professionals who are passionate about what we do. With diverse backgrounds and expertise, we collaborate to deliver exceptional results. Our team is committed to continuous learning, staying up-to-date with industry trends, and embracing new technologies.</p></section><section>";
            break;
        case "guide":
            contentElement.innerHTML = "<h2>Guide</h2><p>This is a guide.</p>";
            break;
        default:
            contentElement.innerHTML = "<h2>Page Not Found</h2><p>The selected component is not available.</p>";
    }
}