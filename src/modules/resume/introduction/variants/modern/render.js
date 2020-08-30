import React from 'react'

const useStyles = () => ({
  root: {
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap'
  },
  headlineText: {
    margin: 0,
    marginRight: '50px',
    marginBottom: '20px'
  },
  paragraphContainer: {
    flex: 1,
  },
  paragraph: {
    margin: 0
  }
})

const Modern = (
  {
    theme,
    headlineText,
    paragraphs
  }
) => {
  const styles = useStyles()
  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
        <h1 style={styles.headlineText}>{headlineText.value}</h1>
        {/* <hr /> */}
        {
          paragraphs.value.map((paragraph, id) => {
            return <div key={id} style={styles.paragraphContainer}>
              {/* <br /> */}
              <p style={styles.paragraph} >{paragraph.value}</p>
            </div>
          })
        }
    </div >
  );
};

export default Modern;