const WorkspaceAnimation = imports.ui.workspaceAnimation;

const oldAnimateSwitch = WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch;

function enable() {
  WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch = function (
    _from,
    _to,
    _direction,
    onComplete
  ) {
    onComplete();
  };
}

function disable() {
  WorkspaceAnimation.WorkspaceAnimationController.prototype.animateSwitch = oldAnimateSwitch;
}