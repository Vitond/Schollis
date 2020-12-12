
//Creates a smooth animation of the element appearing and disappearing
//Element follows this cycle: HIDDEN -> VISIBLE -> HIDING
//Each state is represented by a CSS class
//For example the HIDDEN class would be "defaultClass--hidden", where defaultClass is element´s default class
//HIDING and VISIBLE classes must have an animation 

export const showOrHideEl = (element, cssClass, callback1, callback2, callback3, callback4) => {

    //If the element is HIDDEN
    if ([...element.classList].includes(`${cssClass}--hidden`)) {

        //Applying VISIBLE class
        element.classList.remove(`${cssClass}--hidden`);
        element.classList.add(`${cssClass}--visible`);

        //Executing callback1
        if (callback1) {callback1();};

        const animationEndHandler = () => {
            
            if (callback2) {callback2();};
            
        }
        
        //When appear animation ends, executing callback2
        element.addEventListener('animationend', animationEndHandler, {
        capture: false,
        once: true,
        passive: false
        });

    
    }
    //If element is VISIBLE 
    else {

        //Removing VISIBLE class, adding HIDING class
        element.classList.remove(`${cssClass}--visible`);
        element.classList.add(`${cssClass}--hiding`);

        //Executing callback3
        if (callback3) {callback3();};

        const animationEndHandler = () => {

            element.classList.remove(`${cssClass}--hiding`);
            element.classList.add(`${cssClass}--hidden`);

            if (callback4) {callback4();};
        }

        //When disappear animation ends, removing HIDING class and adding HIDDEN class. Executing callback4.
        element.addEventListener('animationend', animationEndHandler, {
        capture: false,
        once: true,
        passive: false
        });
    } 
}

//  Returns today date in format "dd.mm.yyyy"
export const getTodayDate = () => {
    const today = new Date();
    const date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    return date;
}

//  Returns current time in format "hours:minutes:seconds"
export const getCurrentTime = () => {
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    return time;
}

//  Converts time in format "hours:minutes:seconds" to seconds from midnight
export const convertTimeToSeconds = (time) => {
    const timeArray = time.split(':');
    return +timeArray[0]*3600 + +timeArray[1]*60 + +timeArray[2];
}

//  Converts seconds from midnight to time in format "hours:minutes:seconds"
export const convertSecondsToTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = (timeInSeconds % 3600) % 60;
    const time = `${hours}:${minutes}:${seconds}`;
    return time;

}

//  Switching between two classes, if an element has a class A, the class A is replaced for the class B, if an element has a class B, the class B is replaced for the class A
export const switchClass = (el, classA, classB) => {
    if ([...el.classList].includes(classA)) {
        el.classList.remove(classA);
        el.classList.add(classB);
    } else {
        el.classList.remove(classB);
        el.classList.add(classA);
    }
}
