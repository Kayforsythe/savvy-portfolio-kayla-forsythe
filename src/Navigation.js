export default function Navigation(){
    return `
<div id="navigation">
            <ul class="container">
                <li>
                    <a href="./blog">blog</a>
                </li>
                <li>
                    <a href="./contact">contact</a>
                </li>
                <li>
                    <a href="./project">project</a>
                    <ul class ="dropdown">
                        <li><a href="">first</a></li>
                        <li><a href="">second</a></li>
                        <li><a href="">third</a></li>
                    </ul>
        </div>
    </div>
`;
}