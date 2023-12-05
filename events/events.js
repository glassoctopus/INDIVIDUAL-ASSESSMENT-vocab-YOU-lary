import navBar from "../components/navBar";

const domEvents = () = {
    document.querySelector('#app').addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id.includes('submit-book')) {
            navBar();
        }       
    });
}