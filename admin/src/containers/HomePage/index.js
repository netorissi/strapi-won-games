/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import PageTitle from '../../components/PageTitle';

import { ALink, Block, Container, LinkWrapper, P, Wave, Separator } from './components';
import SocialLink from './SocialLink';

const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_4-create-a-category-content-type',
    contentId: 'app.components.BlockLink.documentation.content',
    titleId: 'app.components.BlockLink.documentation',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    contentId: 'app.components.BlockLink.code.content',
    titleId: 'app.components.BlockLink.code',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/strapi/strapi/',
  },
  {
    name: 'Slack',
    link: 'https://slack.strapi.io/',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@strapi',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/strapijs',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/r/Strapi/',
  },
  {
    name: 'Forum',
    link: 'https://forum.strapi.io',
  },
  {
    name: 'Academy',
    link: 'https://academy.strapi.io',
  },
];

const HomePage = () => {
  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <Wave />
              <h2 id="mainHeader">
                Bem vindo(a) a Won Games!
              </h2>
              <P>
                No menu você poderá inserir diferentes jogos, categorias e muito mais!
              </P>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ padding: 30 }}>
              <h5>
                Em breve teremos tutoriais nesta seção...
              </h5>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
