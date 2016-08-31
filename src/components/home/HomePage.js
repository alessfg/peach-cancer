// React
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

// HomePage component
export default function HomePage() {
  const styles = HomePage.styles;
  return (
    <div className={css(styles.homepage)}>
      Welcome to Peach Cancer
    </div>
  );
}

HomePage.styles = StyleSheet.create({
  homepage: {
    textAlign: 'center',
  },
});
