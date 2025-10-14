import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { CheckCircle, WarningFilled, WatchFilled } from '@openedx/paragon/icons';
import { Hyperlink, Icon } from '@openedx/paragon';
import { useContextId } from '../../../data/hooks';

import { useModel } from '../../../generic/model-store';
import { DashboardLink } from '../../../shared/links';

import messages from './messages';

const CreditInformation = () => {
  const intl = useIntl();
  const courseId = useContextId();

  const {
    creditCourseRequirements,
  } = useModel('progress', courseId);

  if (!creditCourseRequirements) { return null; }

  let eligibilityStatus;
  let requirementStatus;
  const requirements = [];
  const dashboardLink = <DashboardLink />;
  const creditLink = (
    <Hyperlink
      variant="muted"
      isInline
      destination={getConfig().CREDIT_HELP_LINK_URL}
    >tín chỉ khóa học
    </Hyperlink>
  );

  switch (creditCourseRequirements.eligibilityStatus) {
    case 'not_eligible':
      eligibilityStatus = <>Bạn không đủ điều kiện nhận {creditLink} cho khóa học này.</>;
      break;
    case 'eligible':
      eligibilityStatus = <>Bạn đã đáp ứng các yêu cầu để nhận {creditLink} cho khóa học này. Đi đến {dashboardLink} để mua {creditLink}.</>;
      break;
    case 'partial_eligible':
      eligibilityStatus = <>Bạn đang trên đường đáp ứng các yêu cầu để nhận {creditLink} cho khóa học này.</>;
      break;
    default:
      break;
  }
  creditCourseRequirements.requirements.forEach(requirement => {
    switch (requirement.status) {
      case 'submitted':
        requirementStatus = (<>Đã gửi <Icon src={CheckCircle} className="text-success-500 d-inline-flex align-bottom" /></>);
        break;
      case 'failed':
      case 'declined':
        requirementStatus = (<>Thất bại <Icon src={WarningFilled} className="d-inline-flex align-bottom" /></>);
        break;
      case 'satisfied':
        requirementStatus = (<>Hoàn thành <Icon src={CheckCircle} className="text-success-500 d-inline-flex align-bottom" /></>);
        break;
      default:
        requirementStatus = (<>Sắp tới <Icon src={WatchFilled} className="text-gray-500 d-inline-flex align-bottom" /></>);
    }
    requirements.push((
      <div className="row w-100 m-0 small" key={`requirement-${requirement.order}`}>
        <p className="font-weight-bold">
          {requirement.namespace === 'grade'
            ? `Điểm tối thiểu ${Number(requirement.criteria.minGrade) * 100}%:`
            : `${requirement.displayName}:`}
        </p>
        <div className="ml-1">
          {requirementStatus}
        </div>
      </div>
    ));
  });

  return (
    <>
      <h3 className="h4 col-12 p-0">Yêu cầu</h3>
      <p className="small">{eligibilityStatus}</p>
      {requirements}
    </>
  );
};

export default CreditInformation;
