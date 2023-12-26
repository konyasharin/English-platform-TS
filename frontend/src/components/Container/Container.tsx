import {ReactNode} from "react";

interface ContainerProps {
    children: ReactNode,
}

/**
 * Компонент содержит контейнер сайта
 * @param children компонент, который будет внутри контейнера
 */
function Container({children}: ContainerProps){
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container