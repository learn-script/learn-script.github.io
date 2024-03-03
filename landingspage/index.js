const app = document.querySelector('#app');
const root = document.createElement('div');
root.id = 'root';
app.append(root);

// adds content to target elements
const bannerContent = (content, target) => {
    console.log(`Content in bannerContent: ${content}`);
    content.forEach(element => {
        console.log(`Elements in bannerContent :${element}`);
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
        }
    });

};

const welcomeImageContent = () => {
    const imageDiv = document.querySelector('#image');
    const placeholder = document.createElement('img');
    placeholder.id = 'placeholder';
    imageDiv.append(placeholder);
    placeholder.setAttribute('src', 'placeholder.png');
    console.log('dit werkt!');
};

const welcomeButtonContent = () => {
    const buttonsDiv = document.querySelector('#buttons');
    const buttonText = document.createElement('h1');
    const wrapper = document.createElement('div');
    const welcomeButton = document.createElement('button');

    buttonText.innerText = 'Deze text moet nog aangepast worden!';
    buttonText.id = 'buttonText';
    wrapper.id = 'textButtonWrapper';
    welcomeButton.innerText = 'Begin';

    buttonsDiv.append(buttonText, wrapper);
    wrapper.append(welcomeButton);
    console.log('dit werkt ook!');
};

const welcomeContent = (target) => {
    const welcomeDivId = ['image', 'buttons'];
    for (let i = 0; i < welcomeDivId.length; i++) {
        const welcomeDiv = document.createElement('div');
        target.append(welcomeDiv);
        welcomeDiv.id = welcomeDivId[i];

        if (i === 0) {
            welcomeImageContent();
        } else {
            welcomeButtonContent();
        }
    }
};

const infoContent = (target) => {
    const infoNav = document.createElement('nav');
    const testHeader = document.createElement('h2');

    testHeader.innerText = 'test';

    target.append(infoNav);
    infoNav.append(testHeader);

    // const infoDivId = ['infoNav', 'listDiv'];
    // for (let i = 0; i < infoDivId.length; i++) {
    //     const welcomeDiv = document.createElement('div');
    //     target.append(welcomeDiv);
    //     welcomeDiv.id = welcomeDivId[i];

    //     if (i === 0) {
    //         welcomeImageContent();
    //     } else {
    //         welcomeButtonContent();
    //     }
    // }
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
    const newNav = document.createElement('nav');

    headerIDs.forEach(headerID => {
        const newDiv = document.createElement('div');
        newDiv.id = headerID;

        switch (headerID) {
            case 'banner':
                header.append(newDiv);
                newDiv.append(newNav);
                newNav.id = 'bannerNav';
                const bannerTarget = document.querySelector('#bannerNav');
                console.log(bannerTarget);
                bannerContent(bannerElements, bannerTarget);
                break;
            case 'welcome':
                header.append(newDiv);
                const welcomeTarget = document.querySelector('#welcome');
                welcomeContent(welcomeTarget);
                console.log(welcomeTarget);
                break;
            case 'info':
                header.append(newDiv);
                const infoTarget = document.querySelector('#info');
                infoContent(infoTarget);
                break;
        }

    });

};
createStructure();
