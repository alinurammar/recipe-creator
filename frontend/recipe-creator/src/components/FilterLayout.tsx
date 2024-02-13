// FilterLayout.tsx
import React, { useState, useEffect } from 'react';
import './FilterLayout.css';

interface FilterLayoutProps {
    name: string;
    filters: string[];
    filterType: string;
    onFilterChange: (name: string, checkedFilters: string[]) => void;
}



const FilterLayout: React.FC<FilterLayoutProps> = ({ name, filterType, filters, onFilterChange }) => {
    const [checkedFilters, setCheckedFilters] = useState<string[]>([]);

    const handleCheckboxChange = (filter: string) => {
        if (filterType === 'radio') {
            // For radio filter, set the checked filter directly
            setCheckedFilters([filter]);
        } else {
            const isChecked = checkedFilters.includes(filter);
            if (isChecked) {
                setCheckedFilters(checkedFilters.filter(item => item !== filter));
            } else {
                setCheckedFilters([...checkedFilters, filter]);
            }
        }
    };

    useEffect(() => {
        onFilterChange(name, checkedFilters);
    }, [checkedFilters]);

    return (
        <div>
            <h3>{name}:</h3>
            <div>
                {filters.map(filter => (
                    <div key={filter} className="filter-item">
                        <label className="filter-label">
                            <input
                                className="input"
                                type={filterType}
                                checked={checkedFilters.includes(filter)}
                                onChange={() => handleCheckboxChange(filter)}
                            />
                            {filter}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterLayout;
