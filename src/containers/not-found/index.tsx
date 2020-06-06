import * as React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

export default class NotFound extends React.Component<Props> {
  render() {
    return (
      <Container>
        <p>
            Pagina não encontrada
        </p>
      </Container>
    );
  }
}