import React, {useEffect, useState} from "react";
import { FormControl, Dropdown } from "react-bootstrap";
import "./typeFilter.css";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
        className="filter"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
        &nbsp;
        &#x25bc;
    </div>
));

const TypeFilterSearch = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);

const initialTypeText = "Choose type";

const TypeFilter = ({types, typeFilterAction, filterListByTypeAction, pokemonsByTypeUrls}) => {
    const [selectedType, setSelectedType] = useState(initialTypeText);

    const typeSelected = (typeUrl) => {
        if (!typeUrl) {
            filterListByTypeAction('clearFilter');
            setSelectedType(initialTypeText);
            return;
        }

        filterListByTypeAction(typeUrl);

        const type = types.find(({url}) => url === typeUrl);
        setSelectedType(type.name[0].toUpperCase() + type.name.slice(1));
    };

    useEffect(() => {
        if (!pokemonsByTypeUrls.length) {
            setSelectedType(initialTypeText);
        }
    },[pokemonsByTypeUrls]);

    useEffect(() => {
        typeFilterAction()
    },[typeFilterAction]);

    return(
        <Dropdown onSelect={typeSelected}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                {selectedType}
            </Dropdown.Toggle>

            <Dropdown.Menu
                className="dropdown_menu"
                as={TypeFilterSearch}>
                <Dropdown.Item
                    eventKey={null}
                    key="clearFilter"
                    className="pokemon_types"
                >
                    All
                </Dropdown.Item>
                {
                    types.map((type) =>
                        <Dropdown.Item
                            eventKey={type.url}
                            key={type.name}
                            className="pokemon_types"
                        >
                            {type.name}
                        </Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default TypeFilter;
