const createElement = (tag, props = {}) => {
    let el = Object.assign(document.createElement(tag), props);
    if (props.attrs) {
        Object.keys(props.attrs).forEach(key => el.setAttribute(key, props.attrs[key]))
    }
    delete props.attrs;
    return el;
}

const app = document.querySelector('#app');
const root = createElement('div', {
    id: "root"
});
app.append(root);

// adds content to target elements
const bannerContent = (content, target) => {
    console.log(`Content in bannerContent: ${content}`);
    content.forEach(element => {
        console.log(`Elements in bannerContent :${element}`);
        // banner content img
        if (element === 'img' && target.id === 'bannerNav') {
            target.append(createElement(element));
            const img = document.querySelector('#banner img');
            img.setAttribute('src', 'roads-technology.png');
            img.id = 'roadsImg';
            // banner content button
        } else if (element === 'div' && target.id === 'bannerNav') {
            const navContent = ['label', 'button', 'p'];

            target.append(createElement(element));
            const buttonWrapper = document.querySelector('#banner div');
            const bannerid = document.querySelector('#bannerNav');
            buttonWrapper.id = 'buttonWrapper';

            let button, hideMenu;
            buttonWrapper.append(
                button = createElement('button', {
                    id: 'menuButton',
                    // innerText: 'Menu',
                }));
                
            button.append(
                span = createElement('span', {
                    id: 'buttonText',
                    innerText: 'Onderwerpen'
                }));

            bannerid.append(
                hideMenu = createElement('p', {
                    id: 'menu'
                }));
            
        };
    });
};

const welcomeImageContent = () => {
    const imageDiv = document.querySelector('#image');

    // const placeholder = imageDiv.appendChild(createElement('img', {
    //     id : 'placeholder'
    // }));
    // placeholder.setAttribute('src', 'placeholder.png');
    imageDiv.appendChild(createElement('img', {
        id: 'placeholder',
        attrs: {
            src: 'placeholder.png'
        }
    }))//.setAttribute('src', 'placeholder.png');

    console.log('dit werkt!');
};

const welcomeButtonContent = () => {
    const wrapper = createElement('div', {
        id: 'textButtonWrapper'
    });

    document
        .querySelector('#buttons')
        .append(
            createElement('h1', {
                id: 'buttonText',
                innerText: 'Deze text moet nog aangepast worden!'
            }),
            wrapper);

    wrapper.append(
        createElement('button', {
            innerText: 'Begin'
        }));
    console.log('dit werkt ook!');
};

const welcomeContent = (target) => {
    const welcomeDivId = ['image', 'buttons'];
    for (let i = 0; i < welcomeDivId.length; i++) {
        target.append(createElement('div', {
            id: welcomeDivId[i],
        }));

        if (i === 0) {
            welcomeImageContent();
        } else {
            welcomeButtonContent();
        }
    }
};

const infoContent = (target) => {
    const infoDivContent = ['ul', 'li'];
    const ulId = ['Intranet', 'MDN', 'W3schools'];
    
    const infoNav = createElement('nav', {
        id : 'infoNav'
    }); 

    target.append(infoNav);
    
    infoNav.append(
        createElement('div', {
        id : 'infoListDiv'
    }));

    for (let i = 0; i < infoDivContent.length; i++) {
        const ul = document.createElement(infoDivContent[0]);
        ul.id = 'infoListUl';
        if (i === 0) {
            infoListDiv.append(ul);

            for (let j = 0; j < 3; j++) {
                let content = document.createElement(infoDivContent[1]);
                content.id = ulId[j];
                ul.append(content);
                console.log(`Dit werkt!`);
            }
        }
    }
};

// creates html tags and calls function to further add content to tags
const createStructure = () => {
    const elements = ['header', 'main', 'footer'];
    for (const element of elements) {
        const newElement = document.createElement(element);
        root.append(newElement);
        if (element === 'header') {
            headerStructure(newElement);
        }
    }
};

// creates elements and corresponding ID's 
// for each element a function is called to futher add content to those elements
const headerStructure = (header) => {
    const headerIDs = ['banner', 'welcome', 'info'];
    const bannerElements = ['img', 'div'];

    headerIDs.forEach(headerID => {
        const newDiv = createElement('div', {
            id: headerID
        });

        header.append(newDiv);
        switch (headerID) {
            case 'banner':
                let bannerTarget;
                newDiv.append(
                    bannerTarget = createElement('nav', {
                        id: 'bannerNav'
                    }));
                console.log("%c bannerTarget ", "background:gold", bannerTarget);
                bannerContent(bannerElements, bannerTarget);
                break;
            case 'welcome':
                const welcomeTarget = document.querySelector('#welcome');
                welcomeContent(welcomeTarget);
                console.log(welcomeTarget);
                break;
            case 'info':
                const infoTarget = document.querySelector('#info');
                infoContent(infoTarget);
                break;
        }

    });

};
createStructure();
