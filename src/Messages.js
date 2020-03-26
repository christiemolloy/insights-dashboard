/* eslint-disable max-len */
import { defineMessages } from 'react-intl';

export default defineMessages({
    dashboardTitle: {
        id: 'dashboardTitle',
        description: 'Title of the dashboard',
        defaultMessage: 'Overview'
    },
    subscriptionsUtilized: {
        id: 'subscriptionsUtilized',
        description: 'Title of the subscriptions utilized card',
        defaultMessage: 'Subscriptions utilized'
    },
    recsImpactingSystems: {
        id: 'recsImpactingSystems',
        description: 'Advisor - recs impacting systems',
        defaultMessage: '{totalRecs, plural, one {# recommendation} other {# recommendations}}  impacting {systems, plural, one {# system} other {# systems}}'
    },
    incidentsDetected: {
        id: 'incidentsDetected',
        description: 'Advisor - incidents detected',
        defaultMessage: '{incidents, plural, one {incident} other {incidents}} detected'
    },
    critical: {
        id: 'critical',
        description: 'Critical',
        defaultMessage: 'Critical'
    },
    important: {
        id: 'important',
        description: 'important',
        defaultMessage: 'important'
    },
    moderate: {
        id: 'moderate',
        description: 'moderate',
        defaultMessage: 'moderate'
    },
    low: {
        id: 'low',
        description: 'low',
        defaultMessage: 'low'
    },
    compliantHostCount: {
        id: 'compliantHostCount',
        description: 'Compliance - compliant host count',
        defaultMessage: '{count, plural, one {# system} other {# systems}}'
    },
    compliantScore: {
        id: 'compliantScore',
        description: 'Compliance - compliant score',
        defaultMessage: '{score}% passes'
    },
    remediationsTotal: {
        id: 'remediationsTotal',
        description: 'Remediations - remediations total',
        defaultMessage: '{total} more remediations'
    },
    vulnerabilitiesTitle: {
        id: 'vulnerabilitiesTitle',
        description: 'Vulnerability card header',
        defaultMessage: 'Vulnerabilities'
    },
    vulnerabilitiesTotalItems: {
        id: 'vulnerabilitiesTotalItems',
        description: 'Vulnerabilities - vulnerability total',
        defaultMessage: '{total}'
    },
    lastxdays: {
        id: 'lastxdays',
        description: 'Last x days label where x is a predefined value',
        defaultMessage: 'Last {days} days'
    },
    cvesImpactingSystems: {
        id: 'cvesImpactingSystems',
        description: 'Vulnerability - cve impacting link',
        defaultMessage: '{cves, plural, one {CVE} other {CVEs}} impacting your systems'
    },
    vulnerabilityLearnMore: {
        id: 'vulnerabilityLearnMore',
        description: 'Vulnerability - learn more link',
        defaultMessage: 'Learn about CVSS Scores'
    },
    latestVulnerabilitiesTotal: {
        id: 'latestVulnerabilitiesTotal',
        description: 'Vulnerabilities - latest vulnerabilities',
        defaultMessage: '{totalLatest}'
    },
    deniedStateTitle: {
        id: 'deniedStateTitle',
        description: 'Denied state title',
        defaultMessage: 'You do not have access to {appName}'
    },
    deniedStateBody: {
        id: 'deniedStateBody',
        description: 'Denied access body',
        defaultMessage: 'Contact your organization administrator(s) for more information'
    },
    complianceEmptyStateTitle: {
        id: 'complianceEmptyStateTitle',
        description: 'Compliance - empty state title',
        defaultMessage: 'No policies'
    },
    complianceEmptyStateBody: {
        id: 'complianceEmptyStateBody',
        description: 'Compliance - empty state body',
        defaultMessage: `The compliance service uses OpenSCAP policies to track your organization's adherence to compliance requirements`
    },
    complianceEmptyStateAction1: {
        id: 'complianceEmptyStateAction1',
        description: 'Compliance - empty state action 1',
        defaultMessage: 'Create a policy'
    },
    complianceEmptyStateAction2: {
        id: 'complianceEmptyStateAction2',
        description: 'Compliance - empty state action 2',
        defaultMessage: 'Learn about OpenSCAP'
    },
    securityAdvisories: {
        id: 'securityAdvisories',
        description: 'Patch - security advisories',
        defaultMessage: '{count, plural, one {security advisory} other {security advisories}}'
    },
    bugfixAdvisories: {
        id: 'bugfixAdvisories',
        description: 'Patch - bugfix advisories',
        defaultMessage: '{count, plural, one {bug fix} other {bug fixes}}'
    },
    enhancementAdvisories: {
        id: 'enhancementAdvisories',
        description: 'Patch - enhancement advisories',
        defaultMessage: '{count, plural, one {enhancement} other {enhancements}}'
    },
    systemsAffected: {
        id: 'systemsAffected',
        description: 'Patch - systems affected',
        defaultMessage: '{count, plural, one {# system} other {# systems}} affected'
    }
});
