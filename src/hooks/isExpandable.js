const isExpandable = () => {
    const screenSize = document.body.clientWidth;
    return screenSize < 768;
}

export default isExpandable;

