const app = document.querySelector('#app');
const root = document.createElement('div');
root.id = 'root';
app.append(root);

// adds content to target elements
const divContent = (content, target) => {
    console.log(content);
    content.forEach(element => {
        console.log(element);
        const content = document.createElement(element);
        target.append(content);
        if (element === 'img' && target.id === 'banner') {
            const img = document.querySelector('#banner img');
            img.setAttribute('src', 'roads-technology.png');
        } else if (element === 'div' && target.id === 'banner') {
            const buttonWrapper = document.querySelector('#banner div');
            buttonWrapper.append(document.createElement('button'));
            buttonWrapper.id = 'buttonWrapper';
            const button = document.querySelector('#buttonWrapper button');
            button.innerText = 'Menu';
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

    structures.forEach(structure => {
        const newDiv = document.createElement('div');
        newDiv.id = structure;
        header.append(newDiv);
        switch (structure) {
            case 'banner':
                const target = document.querySelector('#banner');
                console.log(target);
                divContent(bannerElements, target);
                break;
        }

    });

};

// img.setAttribute('src', 'roads-technology.png');
// banner.append(img, buttonWrapper);
// buttonWrapper.append(button.innerText = 'Menu');
createStructure();
