const levelStyle = {
    'HS': {
        borderColor: '#2e8555',
        backgroundColor: '#ebffeb'
    },
    'UG': {
        borderColor: '#fcc100',
        backgroundColor: '#fff9e0'
    },
};

export default function WriteupLevelBadge({levels}) {
    return levels && <div style={{
        marginLeft: '0.6em', // 'auto',
        display: 'flex',
        gap: '0.35em'
    }}>
        {}
        {levels.map(level => <div style={{
            fontSize: '0.75em',
            fontWeight: 'unset',
            padding: '0.25em',
            paddingLeft: '0.33em',
            paddingRight: '0.33em',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '0.7em',
            ...levelStyle[level]
        }}>{level}</div>)}
    </div>;

    // return (<div >
    //     {[].ma(level => (<div style={{
    //         borderRadius: '1000px', 
    //         borderWidth: '2px', 
    //         borderColor: levelColor(level)
    //     }}>{level}<div/>))}
    // </div>);
}