
    const createLinkElementAndAppendInHead = (path) => 
	{
        const element = document.createElement('link');
        element.href = `${path}`;
        element.rel = 'stylesheet';
        document.head.append(element);
    }
	
	createLinkElementAndAppendInHead('fonts/icon.css');