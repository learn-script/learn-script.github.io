const body = document.querySelector('body');
const root = document.createElement('div');
root.id = 'root';
body.append(root);

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

const headerStructure = (header) => {
    const structures = [
        { id: 'banner' },
        { id: 'welcome' },
        { id: 'info' }
    ];
    structures.forEach(structure => {
        const newDiv = document.createElement('div');
        newDiv.id = structure.id;
        if (structure.id == 'banner') {
            bannerContent(newDiv);
        }
        header.append(newDiv);
    });
};

const bannerContent = (banner) => {
    const bannerElements = ['img', 'div', 'button'];

    // const img = document.createElement('img');
    // const buttonWrapper = document.createElement('div');
    // const button = document.createElement('button');

    bannerElements.forEach(element => {
        const content = document.createElement(element);
        if(element !== 'button'){
            banner.append(content);
        } else if (element == 'div') {
            element.append(bannerElements[2]);
        }

    })
    // img.setAttribute('src', 'roads-technology.png');
    // banner.append(img, buttonWrapper);
    // buttonWrapper.append(button.innerText = 'Menu');
}
createStructure();
