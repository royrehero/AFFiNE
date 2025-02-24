import { lazy } from 'react';
// export { WorkspaceSettingDetail as NewWorkspaceSettingDetail } from '../components/affine/new-workspace-setting-detail';
export const WorkspaceSettingDetail = lazy(() =>
  import('../components/affine/workspace-setting-detail').then(
    ({ WorkspaceSettingDetail }) => ({
      default: WorkspaceSettingDetail,
    })
  )
);
export const NewWorkspaceSettingDetail = lazy(() =>
  import('../components/affine/new-workspace-setting-detail').then(
    ({ WorkspaceSettingDetail }) => ({
      default: WorkspaceSettingDetail,
    })
  )
);
export const BlockSuitePageList = lazy(() =>
  import('../components/blocksuite/block-suite-page-list').then(
    ({ BlockSuitePageList }) => ({
      default: BlockSuitePageList,
    })
  )
);
export const PageDetailEditor = lazy(() =>
  import('../components/page-detail-editor').then(({ PageDetailEditor }) => ({
    default: PageDetailEditor,
  }))
);

export const WorkspaceHeader = lazy(() =>
  import('../components/workspace-header').then(({ WorkspaceHeader }) => ({
    default: WorkspaceHeader,
  }))
);
