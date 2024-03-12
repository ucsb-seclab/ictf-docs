const levelStyle = {
    'HS': {
        borderColor: '#2e8555',
    },
    'UG': {
        borderColor: '#fcc100',
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
}