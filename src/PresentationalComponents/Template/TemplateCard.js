import React from 'react';
import propTypes from 'prop-types';
import { Button } from '@patternfly/react-core/dist/js/components/Button/Button';
import { Card } from '@patternfly/react-core/dist/js/components/Card/Card';
import { CardActions } from '@patternfly/react-core/dist/js/components/Card/CardActions';
import { CardBody } from '@patternfly/react-core/dist/js/components/Card/CardBody';
import { CardHead } from '@patternfly/react-core/dist/js/components/Card/CardHead';
import { CardHeader } from '@patternfly/react-core/dist/js/components/Card/CardHeader';
import { CardFooter } from '@patternfly/react-core/dist/js/components/Card/CardFooter';
import { Level } from '@patternfly/react-core/dist/js/layouts/Level/Level';
import { LevelItem } from '@patternfly/react-core/dist/js/layouts/Level/LevelItem';
import { Title } from '@patternfly/react-core/dist/js/components/Title/Title';
import { DownloadIcon } from '@patternfly/react-icons';
import './TemplateCard.scss';
import DownloadReport from '../../PresentationalComponents/DownloadReport/DownloadReport';
import InfoInline from '../../PresentationalComponents/InfoInline/InfoInline';

export const TemplateCard = ({ appName, children, ...props }) => {
    return (
        <Card className={ `ins-c-dashboard__card ins-c-dashboard__card--${appName}` } { ...props }>
            { children }
        </Card>
    );
};

TemplateCard.propTypes = {
    appName: propTypes.string,
    children: propTypes.any
};

export const TemplateCardHead = ({ children, ...props }) => {
    return (
        <CardHead { ...props }>
            {children}
        </CardHead>
    );
};

TemplateCardHead.propTypes = {
    children: propTypes.any
};

export const TemplateCardActions = ({ children, downloadReport, infoInlineMessage, ...props }) => {
    return (
        <CardActions { ...props }>
            { infoInlineMessage &&
                <InfoInline message={ infoInlineMessage }/>
            }
            { downloadReport &&
                <DownloadReport/>
            }
            {children}
        </CardActions>
    );
};

TemplateCardActions.propTypes = {
    children: propTypes.any,
    downloadReport: propTypes.any,
    infoInlineMessage: propTypes.string
};

export const TemplateCardHeader = ({ title, subtitle, onDownload, children, ...props }) => {
    return (
        <CardHeader className='ins-c-dashboard__card--header'  { ...props }>
            <Level>
                { title &&
                    <LevelItem>
                        <Title headingLevel="h2" size="lg"> { title } </Title>
                    </LevelItem>
                }
                { subtitle &&
                    <LevelItem>
                        <p className="ins-c-dashboard__card--header-subtitle">{ subtitle }</p>
                    </LevelItem>
                }
                <LevelItem>
                    { children }
                    { onDownload &&
                        <Button variant='link' icon={ <DownloadIcon/> } onClick={ onDownload }>Report</Button>
                    }
                </LevelItem>
            </Level>
        </CardHeader>
    );
};

TemplateCardHeader.propTypes = {
    title: propTypes.string,
    subtitle: propTypes.string,
    children: propTypes.any,
    onDownload: propTypes.func
};

export const TemplateCardBody = ({ children, isHorizontalLayout, ...props }) => {
    return (
        <CardBody className={ 'ins-c-dashboard__card--body' + (isHorizontalLayout ? ' ins-m-horizontal' : '') } { ...props }>
            { children }
        </CardBody>
    );
};

TemplateCardBody.propTypes = {
    isHorizontalLayout: propTypes.any,
    children: propTypes.any
};

export const TemplateCardFooter = ({ children, ...props }) => {
    return (
        <CardFooter className='ins-c-dashboard__card--footer' { ...props }>
            { children }
        </CardFooter>
    );
};

TemplateCardFooter.propTypes = {
    children: propTypes.any
};
