import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub,faInstagram} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab,fas, faTwitterSquare, faFacebook, faLinkedin, faGithub,faInstagram);
}
export default initFontAwesome;