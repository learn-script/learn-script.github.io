const body = document.querySelector('body');
const root = document.createElement('div');

root.id = 'root';
body.append(root);

function createStructure() {
    const elements = ['header', 'main', 'footer'];
    for (const element of elements) {
        console.log(element);
        root.append(document.createElement(element));
    }
};
createStructure();

function headerStructure() {
    const header = document.querySelector('header');
    for (let i = 0; i < 3; i++) {
        let newDiv = document.createElement('div');
        switch (i) {
            case 0:
                header.append(newDiv);
                newDiv.id = 'banner';
                const img = document.createElement('img');
                
                newDiv.append(img);
                break;
            case 1:
                header.append(newDiv);
                newDiv.id = 'welcome';
                break;
            case 2:
                header.append(newDiv);
                newDiv.id = 'info';
                break;
        }

    }
}
headerStructure();
