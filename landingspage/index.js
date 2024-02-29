const app = document.querySelector('#app');
const root = document.createElement('div');
root.id = 'root';
app.append(root);

// adds content to target elements
const divContent = (content, target) => {
    console.log(`Content in divContent: ${content}`);
    content.forEach(element => {
        console.log(`Elements in divContent :${element}`);
        // banner content img
        if (element === 'img' && target.id === 'bannerNav') {
            const content = document.createElement(element);
            target.append(content);
            const img = document.querySelector('#banner img');
            img.setAttribute('src', 'roads-technology.png');
            // banner content button
        } else if (element === 'div' && target.id === 'bannerNav') {
            const content = document.createElement(element);
            target.append(content);
            const buttonWrapper = document.querySelector('#banner div');
            buttonWrapper.append(document.createElement('button'));
            buttonWrapper.id = 'buttonWrapper';
            const button = document.querySelector('#buttonWrapper button');
            button.innerText = 'Menu';
            // welcome content
        } else if (content[0] === 'image') {
            content.forEach(id => {
                const newDiv = document.createElement('div');
                newDiv.id = id;
                target.append(newDiv);
            });
        }
    });

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
// for each element divContent() is called to futher add content to those elements
const headerStructure = (header) => {
    const structures = ['banner', 'welcome', 'info'];
    const bannerElements = ['img', 'div'];
    const welcomeIDs = ['image', 'buttons'];
    const newNav = document.createElement('nav');

    structures.forEach(structure => {
        const newDiv = document.createElement('div');
        newDiv.id = structure;
        newNav.id = 'bannerNav';

        switch (structure) {
            case 'banner':
                header.append(newDiv);
                newDiv.append(newNav);
                const bannerTarget = document.querySelector('#bannerNav');
                console.log(bannerTarget);
                divContent(bannerElements, bannerTarget);
                break;
            case 'welcome':
                header.append(newDiv);
                const welcomeTarget = document.querySelector('#welcome');
                console.log(welcomeTarget);
                divContent(welcomeIDs, welcomeTarget);
                break;
            case 'info':
                header.append(newDiv);
                break;
        }

    });

};

// img.setAttribute('src', 'roads-technology.png');
// banner.append(img, buttonWrapper);
// buttonWrapper.append(button.innerText = 'Menu');
createStructure();
