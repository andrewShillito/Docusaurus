/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';
import Helmet from 'react-helmet';

import DocsPaginator from '@theme/DocsPaginator'; // eslint-disable-line
import Footer from '@theme/Footer'; // eslint-disable-line
import Navbar from '@theme/Navbar'; // eslint-disable-line
import Sidebar from '@theme/Sidebar'; // eslint-disable-line

import styles from './styles.module.css';

class Doc extends React.Component {
  render() {
    const {
      docsMetadatas,
      docsSidebars,
      env,
      location,
      metadata,
      pagesMetadatas,
      siteConfig = {},
      route,
    } = this.props;
    const {language, version} = metadata;
    const {baseUrl, favicon} = siteConfig;
    return (
      <div>
        <Helmet>
          <title>{(metadata && metadata.title) || siteConfig.title}</title>
          {favicon && <link rel="shortcut icon" href={baseUrl + favicon} />}
          {language && <html lang={language} />}
          {language && <meta name="docsearch:language" content={language} />}
          {version && <meta name="docsearch:version" content={version} />}
        </Helmet>
        <Navbar
          docsMetadatas={docsMetadatas}
          env={env}
          metadata={metadata}
          siteConfig={siteConfig}
        />
        <Sidebar
          docsMetadatas={docsMetadatas}
          docsSidebars={docsSidebars}
          metadata={metadata}
        />
        <div className={styles.mainContainer}>
          <div className={styles.docContainer}>
            <div className={styles.docContent}>
              <h1>{metadata.title}</h1>
              {this.props.children}
            </div>
            <div className={styles.paginatorContainer}>
              <DocsPaginator
                docsMetadatas={docsMetadatas}
                metadata={metadata}
              />
            </div>
          </div>
          <Footer
            docsMetadatas={docsMetadatas}
            location={location}
            pagesMetadatas={pagesMetadatas}
          />
        </div>
      </div>
    );
  }
}

export default Doc;
