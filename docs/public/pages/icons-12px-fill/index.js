import { h } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

import I123Fill12Icon from "@dependable/icons/I123Fill12Icon";
import AdjustFill12Icon from "@dependable/icons/AdjustFill12Icon";
import AlertErrorFill12Icon from "@dependable/icons/AlertErrorFill12Icon";
import AlertWarningFill12Icon from "@dependable/icons/AlertWarningFill12Icon";
import AlignCenterFill12Icon from "@dependable/icons/AlignCenterFill12Icon";
import AlignJustifyFill12Icon from "@dependable/icons/AlignJustifyFill12Icon";
import AlignLeftFill12Icon from "@dependable/icons/AlignLeftFill12Icon";
import AlignRightFill12Icon from "@dependable/icons/AlignRightFill12Icon";
import AltTextFill12Icon from "@dependable/icons/AltTextFill12Icon";
import ArrowLeftFill12Icon from "@dependable/icons/ArrowLeftFill12Icon";
import ArrowLeftSmFill12Icon from "@dependable/icons/ArrowLeftSmFill12Icon";
import ArrowLeftUpFill12Icon from "@dependable/icons/ArrowLeftUpFill12Icon";
import ArrowRetweetFill12Icon from "@dependable/icons/ArrowRetweetFill12Icon";
import ArrowReverseFill12Icon from "@dependable/icons/ArrowReverseFill12Icon";
import ArrowTrendingFill12Icon from "@dependable/icons/ArrowTrendingFill12Icon";
import AsteriskFill12Icon from "@dependable/icons/AsteriskFill12Icon";
import AtFill12Icon from "@dependable/icons/AtFill12Icon";
import BarChartFill12Icon from "@dependable/icons/BarChartFill12Icon";
import BasketballFill12Icon from "@dependable/icons/BasketballFill12Icon";
import BoldFill12Icon from "@dependable/icons/BoldFill12Icon";
import BookClosedFill12Icon from "@dependable/icons/BookClosedFill12Icon";
import BookOpenFill12Icon from "@dependable/icons/BookOpenFill12Icon";
import Box3dFill12Icon from "@dependable/icons/Box3dFill12Icon";
import BuildingFill12Icon from "@dependable/icons/BuildingFill12Icon";
import CalendarFill12Icon from "@dependable/icons/CalendarFill12Icon";
import CameraFill12Icon from "@dependable/icons/CameraFill12Icon";
import CarFill12Icon from "@dependable/icons/CarFill12Icon";
import CenterFill12Icon from "@dependable/icons/CenterFill12Icon";
import CheckBadgeFill12Icon from "@dependable/icons/CheckBadgeFill12Icon";
import CheckBoxDoubleFill12Icon from "@dependable/icons/CheckBoxDoubleFill12Icon";
import CheckBoxFill12Icon from "@dependable/icons/CheckBoxFill12Icon";
import CheckCircleFill12Icon from "@dependable/icons/CheckCircleFill12Icon";
import CheckDoubleFill12Icon from "@dependable/icons/CheckDoubleFill12Icon";
import CheckLgFill12Icon from "@dependable/icons/CheckLgFill12Icon";
import CheckSmFill12Icon from "@dependable/icons/CheckSmFill12Icon";
import ChevronBoxFill12Icon from "@dependable/icons/ChevronBoxFill12Icon";
import ChevronDoubleDownFill12Icon from "@dependable/icons/ChevronDoubleDownFill12Icon";
import ChevronDoubleLeftFill12Icon from "@dependable/icons/ChevronDoubleLeftFill12Icon";
import ChevronDoubleRightFill12Icon from "@dependable/icons/ChevronDoubleRightFill12Icon";
import ChevronDoubleUpFill12Icon from "@dependable/icons/ChevronDoubleUpFill12Icon";
import ChevronDownFill12Icon from "@dependable/icons/ChevronDownFill12Icon";
import ChevronLeftFill12Icon from "@dependable/icons/ChevronLeftFill12Icon";
import ChevronRightFill12Icon from "@dependable/icons/ChevronRightFill12Icon";
import ChevronUpFill12Icon from "@dependable/icons/ChevronUpFill12Icon";
import CircleFill12Icon from "@dependable/icons/CircleFill12Icon";
import CircleFullFill12Icon from "@dependable/icons/CircleFullFill12Icon";
import CircleLineFill12Icon from "@dependable/icons/CircleLineFill12Icon";
import CircleSmFill12Icon from "@dependable/icons/CircleSmFill12Icon";
import ClipboardBlankFill12Icon from "@dependable/icons/ClipboardBlankFill12Icon";
import ClipboardCheckFill12Icon from "@dependable/icons/ClipboardCheckFill12Icon";
import ClipboardListFill12Icon from "@dependable/icons/ClipboardListFill12Icon";
import ClockCycleFill12Icon from "@dependable/icons/ClockCycleFill12Icon";
import ClockFill12Icon from "@dependable/icons/ClockFill12Icon";
import ClockInFill12Icon from "@dependable/icons/ClockInFill12Icon";
import ClockOutFill12Icon from "@dependable/icons/ClockOutFill12Icon";
import CopyFill12Icon from "@dependable/icons/CopyFill12Icon";
import CreditCardFill12Icon from "@dependable/icons/CreditCardFill12Icon";
import CssFill12Icon from "@dependable/icons/CssFill12Icon";
import CursorArrowFill12Icon from "@dependable/icons/CursorArrowFill12Icon";
import CutleryFill12Icon from "@dependable/icons/CutleryFill12Icon";
import DashFill12Icon from "@dependable/icons/DashFill12Icon";
import DatabaseFill12Icon from "@dependable/icons/DatabaseFill12Icon";
import DecimalFill12Icon from "@dependable/icons/DecimalFill12Icon";
import DirectionLtrFill12Icon from "@dependable/icons/DirectionLtrFill12Icon";
import DirectionRtlFill12Icon from "@dependable/icons/DirectionRtlFill12Icon";
import DocumentSearchFill12Icon from "@dependable/icons/DocumentSearchFill12Icon";
import DownloadFill12Icon from "@dependable/icons/DownloadFill12Icon";
import DuplicateFill12Icon from "@dependable/icons/DuplicateFill12Icon";
import EditRedoFill12Icon from "@dependable/icons/EditRedoFill12Icon";
import EditUndoFill12Icon from "@dependable/icons/EditUndoFill12Icon";
import EmailFill12Icon from "@dependable/icons/EmailFill12Icon";
import EraserFill12Icon from "@dependable/icons/EraserFill12Icon";
import ExitFill12Icon from "@dependable/icons/ExitFill12Icon";
import EyeFill12Icon from "@dependable/icons/EyeFill12Icon";
import EyeHideFill12Icon from "@dependable/icons/EyeHideFill12Icon";
import FacebookFill12Icon from "@dependable/icons/FacebookFill12Icon";
import FileDocumentFill12Icon from "@dependable/icons/FileDocumentFill12Icon";
import FileErrorFill12Icon from "@dependable/icons/FileErrorFill12Icon";
import FileGenericFill12Icon from "@dependable/icons/FileGenericFill12Icon";
import FileImageFill12Icon from "@dependable/icons/FileImageFill12Icon";
import FilePdfFill12Icon from "@dependable/icons/FilePdfFill12Icon";
import FilePresentationFill12Icon from "@dependable/icons/FilePresentationFill12Icon";
import FileSpreadsheetFill12Icon from "@dependable/icons/FileSpreadsheetFill12Icon";
import FileZipFill12Icon from "@dependable/icons/FileZipFill12Icon";
import FilterFill12Icon from "@dependable/icons/FilterFill12Icon";
import FlagFill12Icon from "@dependable/icons/FlagFill12Icon";
import FolderClosedFill12Icon from "@dependable/icons/FolderClosedFill12Icon";
import FolderOpenFill12Icon from "@dependable/icons/FolderOpenFill12Icon";
import FullWidthFill12Icon from "@dependable/icons/FullWidthFill12Icon";
import GearFill12Icon from "@dependable/icons/GearFill12Icon";
import GithubFill12Icon from "@dependable/icons/GithubFill12Icon";
import GlobeFill12Icon from "@dependable/icons/GlobeFill12Icon";
import Grid2x2Fill12Icon from "@dependable/icons/Grid2x2Fill12Icon";
import Grid3x3Fill12Icon from "@dependable/icons/Grid3x3Fill12Icon";
import HeadingFill12Icon from "@dependable/icons/HeadingFill12Icon";
import HeartFill12Icon from "@dependable/icons/HeartFill12Icon";
import HistoryFill12Icon from "@dependable/icons/HistoryFill12Icon";
import HomeFill12Icon from "@dependable/icons/HomeFill12Icon";
import HorizontalRuleFill12Icon from "@dependable/icons/HorizontalRuleFill12Icon";
import ImageFill12Icon from "@dependable/icons/ImageFill12Icon";
import InboxFill12Icon from "@dependable/icons/InboxFill12Icon";
import IndentDecreaseFill12Icon from "@dependable/icons/IndentDecreaseFill12Icon";
import IndentIncreaseFill12Icon from "@dependable/icons/IndentIncreaseFill12Icon";
import InfoFill12Icon from "@dependable/icons/InfoFill12Icon";
import InterlockingRingsFill12Icon from "@dependable/icons/InterlockingRingsFill12Icon";
import ItalicFill12Icon from "@dependable/icons/ItalicFill12Icon";
import LeafFill12Icon from "@dependable/icons/LeafFill12Icon";
import LifesaverFill12Icon from "@dependable/icons/LifesaverFill12Icon";
import LightbulbFill12Icon from "@dependable/icons/LightbulbFill12Icon";
import LightningBoltFill12Icon from "@dependable/icons/LightningBoltFill12Icon";
import LineGraphFill12Icon from "@dependable/icons/LineGraphFill12Icon";
import LineSocialFill12Icon from "@dependable/icons/LineSocialFill12Icon";
import LinkFill12Icon from "@dependable/icons/LinkFill12Icon";
import LinkRemoveFill12Icon from "@dependable/icons/LinkRemoveFill12Icon";
import LinkedinFill12Icon from "@dependable/icons/LinkedinFill12Icon";
import ListBulletFill12Icon from "@dependable/icons/ListBulletFill12Icon";
import ListNumberFill12Icon from "@dependable/icons/ListNumberFill12Icon";
import ListNumberRtlFill12Icon from "@dependable/icons/ListNumberRtlFill12Icon";
import LocationFill12Icon from "@dependable/icons/LocationFill12Icon";
import LockLockedFill12Icon from "@dependable/icons/LockLockedFill12Icon";
import LockUnlockedFill12Icon from "@dependable/icons/LockUnlockedFill12Icon";
import MarkupFill12Icon from "@dependable/icons/MarkupFill12Icon";
import MaximizeFill12Icon from "@dependable/icons/MaximizeFill12Icon";
import MegaphoneFill12Icon from "@dependable/icons/MegaphoneFill12Icon";
import MenuFill12Icon from "@dependable/icons/MenuFill12Icon";
import MessengerFill12Icon from "@dependable/icons/MessengerFill12Icon";
import MicrophoneOffFill12Icon from "@dependable/icons/MicrophoneOffFill12Icon";
import MicrophoneOnFill12Icon from "@dependable/icons/MicrophoneOnFill12Icon";
import MinimizeFill12Icon from "@dependable/icons/MinimizeFill12Icon";
import MobilePhoneFill12Icon from "@dependable/icons/MobilePhoneFill12Icon";
import MonitorFill12Icon from "@dependable/icons/MonitorFill12Icon";
import MultilineFill12Icon from "@dependable/icons/MultilineFill12Icon";
import NewWindowFill12Icon from "@dependable/icons/NewWindowFill12Icon";
import NotesFill12Icon from "@dependable/icons/NotesFill12Icon";
import NotificationFill12Icon from "@dependable/icons/NotificationFill12Icon";
import NumberFill12Icon from "@dependable/icons/NumberFill12Icon";
import OriginalSizeFill12Icon from "@dependable/icons/OriginalSizeFill12Icon";
import OverflowFill12Icon from "@dependable/icons/OverflowFill12Icon";
import OverflowVerticalFill12Icon from "@dependable/icons/OverflowVerticalFill12Icon";
import PaletteFill12Icon from "@dependable/icons/PaletteFill12Icon";
import PanelsFill12Icon from "@dependable/icons/PanelsFill12Icon";
import ParenthesesFill12Icon from "@dependable/icons/ParenthesesFill12Icon";
import PauseFill12Icon from "@dependable/icons/PauseFill12Icon";
import PencilFill12Icon from "@dependable/icons/PencilFill12Icon";
import PhoneCallEndFill12Icon from "@dependable/icons/PhoneCallEndFill12Icon";
import PhoneCallInFill12Icon from "@dependable/icons/PhoneCallInFill12Icon";
import PhoneCallOutFill12Icon from "@dependable/icons/PhoneCallOutFill12Icon";
import PhoneCallPauseFill12Icon from "@dependable/icons/PhoneCallPauseFill12Icon";
import PhoneCallSpeakerFill12Icon from "@dependable/icons/PhoneCallSpeakerFill12Icon";
import PhoneCallTransferFill12Icon from "@dependable/icons/PhoneCallTransferFill12Icon";
import PhoneCallTransferOnlyFill12Icon from "@dependable/icons/PhoneCallTransferOnlyFill12Icon";
import PhoneFill12Icon from "@dependable/icons/PhoneFill12Icon";
import PinFill12Icon from "@dependable/icons/PinFill12Icon";
import PinRemoveFill12Icon from "@dependable/icons/PinRemoveFill12Icon";
import PlayCircleFill12Icon from "@dependable/icons/PlayCircleFill12Icon";
import PlayFill12Icon from "@dependable/icons/PlayFill12Icon";
import PlugFill12Icon from "@dependable/icons/PlugFill12Icon";
import PlusCircleFill12Icon from "@dependable/icons/PlusCircleFill12Icon";
import PlusFill12Icon from "@dependable/icons/PlusFill12Icon";
import PuzzlePieceFill12Icon from "@dependable/icons/PuzzlePieceFill12Icon";
import QuestionMarkFill12Icon from "@dependable/icons/QuestionMarkFill12Icon";
import QuoteFill12Icon from "@dependable/icons/QuoteFill12Icon";
import RearrangeFill12Icon from "@dependable/icons/RearrangeFill12Icon";
import RecordFill12Icon from "@dependable/icons/RecordFill12Icon";
import ReloadFill12Icon from "@dependable/icons/ReloadFill12Icon";
import SandboxFill12Icon from "@dependable/icons/SandboxFill12Icon";
import SearchFill12Icon from "@dependable/icons/SearchFill12Icon";
import ShapesFill12Icon from "@dependable/icons/ShapesFill12Icon";
import ShareFill12Icon from "@dependable/icons/ShareFill12Icon";
import ShieldFill12Icon from "@dependable/icons/ShieldFill12Icon";
import ShoppingCartFill12Icon from "@dependable/icons/ShoppingCartFill12Icon";
import SignpostFill12Icon from "@dependable/icons/SignpostFill12Icon";
import SlackFill12Icon from "@dependable/icons/SlackFill12Icon";
import SmileSlightFill12Icon from "@dependable/icons/SmileSlightFill12Icon";
import SmileyFill12Icon from "@dependable/icons/SmileyFill12Icon";
import SortFill12Icon from "@dependable/icons/SortFill12Icon";
import SpeechBubbleConversationFill12Icon from "@dependable/icons/SpeechBubbleConversationFill12Icon";
import SpeechBubbleLightningBoltFill12Icon from "@dependable/icons/SpeechBubbleLightningBoltFill12Icon";
import SpeechBubblePlainFill12Icon from "@dependable/icons/SpeechBubblePlainFill12Icon";
import StarFill12Icon from "@dependable/icons/StarFill12Icon";
import TableFill12Icon from "@dependable/icons/TableFill12Icon";
import TagFill12Icon from "@dependable/icons/TagFill12Icon";
import TerminalCliFill12Icon from "@dependable/icons/TerminalCliFill12Icon";
import TerminalWindowFill12Icon from "@dependable/icons/TerminalWindowFill12Icon";
import TextColorFill12Icon from "@dependable/icons/TextColorFill12Icon";
import TextFill12Icon from "@dependable/icons/TextFill12Icon";
import ThumbsDownFill12Icon from "@dependable/icons/ThumbsDownFill12Icon";
import ThumbsUpFill12Icon from "@dependable/icons/ThumbsUpFill12Icon";
import TranslationCreatedFill12Icon from "@dependable/icons/TranslationCreatedFill12Icon";
import TranslationDeletedFill12Icon from "@dependable/icons/TranslationDeletedFill12Icon";
import TranslationExistsFill12Icon from "@dependable/icons/TranslationExistsFill12Icon";
import TranslationOutdatedFill12Icon from "@dependable/icons/TranslationOutdatedFill12Icon";
import TranslationUpdatedFill12Icon from "@dependable/icons/TranslationUpdatedFill12Icon";
import TrashFill12Icon from "@dependable/icons/TrashFill12Icon";
import TwitterFill12Icon from "@dependable/icons/TwitterFill12Icon";
import UnderlineFill12Icon from "@dependable/icons/UnderlineFill12Icon";
import UploadFill12Icon from "@dependable/icons/UploadFill12Icon";
import UserCircleFill12Icon from "@dependable/icons/UserCircleFill12Icon";
import UserFollowFill12Icon from "@dependable/icons/UserFollowFill12Icon";
import UserGroupFill12Icon from "@dependable/icons/UserGroupFill12Icon";
import UserListFill12Icon from "@dependable/icons/UserListFill12Icon";
import UserSoloFill12Icon from "@dependable/icons/UserSoloFill12Icon";
import UserUnfollowFill12Icon from "@dependable/icons/UserUnfollowFill12Icon";
import VoicemailFill12Icon from "@dependable/icons/VoicemailFill12Icon";
import VolumeMutedFill12Icon from "@dependable/icons/VolumeMutedFill12Icon";
import VolumeUnmutedFill12Icon from "@dependable/icons/VolumeUnmutedFill12Icon";
import WechatFill12Icon from "@dependable/icons/WechatFill12Icon";
import WhatsappFill12Icon from "@dependable/icons/WhatsappFill12Icon";
import WrapLeftFill12Icon from "@dependable/icons/WrapLeftFill12Icon";
import WrapRightFill12Icon from "@dependable/icons/WrapRightFill12Icon";
import XCircleFill12Icon from "@dependable/icons/XCircleFill12Icon";
import XFill12Icon from "@dependable/icons/XFill12Icon";
import ZendeskFill12Icon from "@dependable/icons/ZendeskFill12Icon";

const columnStyles = css`
  & {
    display: grid;
    grid-template-columns: auto 1fr auto 1fr;
    gap: 1em;
    fill: #bbb;
    margin: 2em 0;
  }
`;

const copyStyles = css`
  & {
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    color: var(--dc-color-foreground);
  }

  &:focus {
    outline: none;
  }
`;

let interceptCopy;

document.addEventListener("copy", (e) => {
  if (interceptCopy) {
    e.clipboardData.setData("text/plain", interceptCopy);
    e.preventDefault();
  }
});

const copy = (text) => {
  interceptCopy = text;
  document.execCommand("copy");
  interceptCopy = null;
};

class IconCopyButton {
  constructor() {
    this.onClick = () => {
      const name = this.props.children;
      copy(`import ${name} from "@dependable/icons/${name}";`);
    };
  }

  render({ children }) {
    return h(
      "button",
      { onClick: this.onClick, className: copyStyles, title: "Click to copy" },
      children,
    );
  }
}

export default class Page {
  render() {
    return [
      h(Title, {}, "12px (fill)"),
      h(
        SubTitle,
        {},
        "These icon components is extracted from ",
        h(
          Anchor,
          { href: "https://garden.zendesk.com/design/icons" },
          "Zendesk Garden",
        ),
        " and turned into components.",
      ),
      h(Line),
      h(
        "p",
        {},
        "Tip ",
        h(TipIcon),
        " click on the icon label to copy the",
        "import to that clipboard.",
      ),
      h(
        "div",
        { className: columnStyles },
        h(I123Fill12Icon),
        h(IconCopyButton, {}, "I123Fill12Icon"),
        h(AdjustFill12Icon),
        h(IconCopyButton, {}, "AdjustFill12Icon"),
        h(AlertErrorFill12Icon),
        h(IconCopyButton, {}, "AlertErrorFill12Icon"),
        h(AlertWarningFill12Icon),
        h(IconCopyButton, {}, "AlertWarningFill12Icon"),
        h(AlignCenterFill12Icon),
        h(IconCopyButton, {}, "AlignCenterFill12Icon"),
        h(AlignJustifyFill12Icon),
        h(IconCopyButton, {}, "AlignJustifyFill12Icon"),
        h(AlignLeftFill12Icon),
        h(IconCopyButton, {}, "AlignLeftFill12Icon"),
        h(AlignRightFill12Icon),
        h(IconCopyButton, {}, "AlignRightFill12Icon"),
        h(AltTextFill12Icon),
        h(IconCopyButton, {}, "AltTextFill12Icon"),
        h(ArrowLeftFill12Icon),
        h(IconCopyButton, {}, "ArrowLeftFill12Icon"),
        h(ArrowLeftSmFill12Icon),
        h(IconCopyButton, {}, "ArrowLeftSmFill12Icon"),
        h(ArrowLeftUpFill12Icon),
        h(IconCopyButton, {}, "ArrowLeftUpFill12Icon"),
        h(ArrowRetweetFill12Icon),
        h(IconCopyButton, {}, "ArrowRetweetFill12Icon"),
        h(ArrowReverseFill12Icon),
        h(IconCopyButton, {}, "ArrowReverseFill12Icon"),
        h(ArrowTrendingFill12Icon),
        h(IconCopyButton, {}, "ArrowTrendingFill12Icon"),
        h(AsteriskFill12Icon),
        h(IconCopyButton, {}, "AsteriskFill12Icon"),
        h(AtFill12Icon),
        h(IconCopyButton, {}, "AtFill12Icon"),
        h(BarChartFill12Icon),
        h(IconCopyButton, {}, "BarChartFill12Icon"),
        h(BasketballFill12Icon),
        h(IconCopyButton, {}, "BasketballFill12Icon"),
        h(BoldFill12Icon),
        h(IconCopyButton, {}, "BoldFill12Icon"),
        h(BookClosedFill12Icon),
        h(IconCopyButton, {}, "BookClosedFill12Icon"),
        h(BookOpenFill12Icon),
        h(IconCopyButton, {}, "BookOpenFill12Icon"),
        h(Box3dFill12Icon),
        h(IconCopyButton, {}, "Box3dFill12Icon"),
        h(BuildingFill12Icon),
        h(IconCopyButton, {}, "BuildingFill12Icon"),
        h(CalendarFill12Icon),
        h(IconCopyButton, {}, "CalendarFill12Icon"),
        h(CameraFill12Icon),
        h(IconCopyButton, {}, "CameraFill12Icon"),
        h(CarFill12Icon),
        h(IconCopyButton, {}, "CarFill12Icon"),
        h(CenterFill12Icon),
        h(IconCopyButton, {}, "CenterFill12Icon"),
        h(CheckBadgeFill12Icon),
        h(IconCopyButton, {}, "CheckBadgeFill12Icon"),
        h(CheckBoxDoubleFill12Icon),
        h(IconCopyButton, {}, "CheckBoxDoubleFill12Icon"),
        h(CheckBoxFill12Icon),
        h(IconCopyButton, {}, "CheckBoxFill12Icon"),
        h(CheckCircleFill12Icon),
        h(IconCopyButton, {}, "CheckCircleFill12Icon"),
        h(CheckDoubleFill12Icon),
        h(IconCopyButton, {}, "CheckDoubleFill12Icon"),
        h(CheckLgFill12Icon),
        h(IconCopyButton, {}, "CheckLgFill12Icon"),
        h(CheckSmFill12Icon),
        h(IconCopyButton, {}, "CheckSmFill12Icon"),
        h(ChevronBoxFill12Icon),
        h(IconCopyButton, {}, "ChevronBoxFill12Icon"),
        h(ChevronDoubleDownFill12Icon),
        h(IconCopyButton, {}, "ChevronDoubleDownFill12Icon"),
        h(ChevronDoubleLeftFill12Icon),
        h(IconCopyButton, {}, "ChevronDoubleLeftFill12Icon"),
        h(ChevronDoubleRightFill12Icon),
        h(IconCopyButton, {}, "ChevronDoubleRightFill12Icon"),
        h(ChevronDoubleUpFill12Icon),
        h(IconCopyButton, {}, "ChevronDoubleUpFill12Icon"),
        h(ChevronDownFill12Icon),
        h(IconCopyButton, {}, "ChevronDownFill12Icon"),
        h(ChevronLeftFill12Icon),
        h(IconCopyButton, {}, "ChevronLeftFill12Icon"),
        h(ChevronRightFill12Icon),
        h(IconCopyButton, {}, "ChevronRightFill12Icon"),
        h(ChevronUpFill12Icon),
        h(IconCopyButton, {}, "ChevronUpFill12Icon"),
        h(CircleFill12Icon),
        h(IconCopyButton, {}, "CircleFill12Icon"),
        h(CircleFullFill12Icon),
        h(IconCopyButton, {}, "CircleFullFill12Icon"),
        h(CircleLineFill12Icon),
        h(IconCopyButton, {}, "CircleLineFill12Icon"),
        h(CircleSmFill12Icon),
        h(IconCopyButton, {}, "CircleSmFill12Icon"),
        h(ClipboardBlankFill12Icon),
        h(IconCopyButton, {}, "ClipboardBlankFill12Icon"),
        h(ClipboardCheckFill12Icon),
        h(IconCopyButton, {}, "ClipboardCheckFill12Icon"),
        h(ClipboardListFill12Icon),
        h(IconCopyButton, {}, "ClipboardListFill12Icon"),
        h(ClockCycleFill12Icon),
        h(IconCopyButton, {}, "ClockCycleFill12Icon"),
        h(ClockFill12Icon),
        h(IconCopyButton, {}, "ClockFill12Icon"),
        h(ClockInFill12Icon),
        h(IconCopyButton, {}, "ClockInFill12Icon"),
        h(ClockOutFill12Icon),
        h(IconCopyButton, {}, "ClockOutFill12Icon"),
        h(CopyFill12Icon),
        h(IconCopyButton, {}, "CopyFill12Icon"),
        h(CreditCardFill12Icon),
        h(IconCopyButton, {}, "CreditCardFill12Icon"),
        h(CssFill12Icon),
        h(IconCopyButton, {}, "CssFill12Icon"),
        h(CursorArrowFill12Icon),
        h(IconCopyButton, {}, "CursorArrowFill12Icon"),
        h(CutleryFill12Icon),
        h(IconCopyButton, {}, "CutleryFill12Icon"),
        h(DashFill12Icon),
        h(IconCopyButton, {}, "DashFill12Icon"),
        h(DatabaseFill12Icon),
        h(IconCopyButton, {}, "DatabaseFill12Icon"),
        h(DecimalFill12Icon),
        h(IconCopyButton, {}, "DecimalFill12Icon"),
        h(DirectionLtrFill12Icon),
        h(IconCopyButton, {}, "DirectionLtrFill12Icon"),
        h(DirectionRtlFill12Icon),
        h(IconCopyButton, {}, "DirectionRtlFill12Icon"),
        h(DocumentSearchFill12Icon),
        h(IconCopyButton, {}, "DocumentSearchFill12Icon"),
        h(DownloadFill12Icon),
        h(IconCopyButton, {}, "DownloadFill12Icon"),
        h(DuplicateFill12Icon),
        h(IconCopyButton, {}, "DuplicateFill12Icon"),
        h(EditRedoFill12Icon),
        h(IconCopyButton, {}, "EditRedoFill12Icon"),
        h(EditUndoFill12Icon),
        h(IconCopyButton, {}, "EditUndoFill12Icon"),
        h(EmailFill12Icon),
        h(IconCopyButton, {}, "EmailFill12Icon"),
        h(EraserFill12Icon),
        h(IconCopyButton, {}, "EraserFill12Icon"),
        h(ExitFill12Icon),
        h(IconCopyButton, {}, "ExitFill12Icon"),
        h(EyeFill12Icon),
        h(IconCopyButton, {}, "EyeFill12Icon"),
        h(EyeHideFill12Icon),
        h(IconCopyButton, {}, "EyeHideFill12Icon"),
        h(FacebookFill12Icon),
        h(IconCopyButton, {}, "FacebookFill12Icon"),
        h(FileDocumentFill12Icon),
        h(IconCopyButton, {}, "FileDocumentFill12Icon"),
        h(FileErrorFill12Icon),
        h(IconCopyButton, {}, "FileErrorFill12Icon"),
        h(FileGenericFill12Icon),
        h(IconCopyButton, {}, "FileGenericFill12Icon"),
        h(FileImageFill12Icon),
        h(IconCopyButton, {}, "FileImageFill12Icon"),
        h(FilePdfFill12Icon),
        h(IconCopyButton, {}, "FilePdfFill12Icon"),
        h(FilePresentationFill12Icon),
        h(IconCopyButton, {}, "FilePresentationFill12Icon"),
        h(FileSpreadsheetFill12Icon),
        h(IconCopyButton, {}, "FileSpreadsheetFill12Icon"),
        h(FileZipFill12Icon),
        h(IconCopyButton, {}, "FileZipFill12Icon"),
        h(FilterFill12Icon),
        h(IconCopyButton, {}, "FilterFill12Icon"),
        h(FlagFill12Icon),
        h(IconCopyButton, {}, "FlagFill12Icon"),
        h(FolderClosedFill12Icon),
        h(IconCopyButton, {}, "FolderClosedFill12Icon"),
        h(FolderOpenFill12Icon),
        h(IconCopyButton, {}, "FolderOpenFill12Icon"),
        h(FullWidthFill12Icon),
        h(IconCopyButton, {}, "FullWidthFill12Icon"),
        h(GearFill12Icon),
        h(IconCopyButton, {}, "GearFill12Icon"),
        h(GithubFill12Icon),
        h(IconCopyButton, {}, "GithubFill12Icon"),
        h(GlobeFill12Icon),
        h(IconCopyButton, {}, "GlobeFill12Icon"),
        h(Grid2x2Fill12Icon),
        h(IconCopyButton, {}, "Grid2x2Fill12Icon"),
        h(Grid3x3Fill12Icon),
        h(IconCopyButton, {}, "Grid3x3Fill12Icon"),
        h(HeadingFill12Icon),
        h(IconCopyButton, {}, "HeadingFill12Icon"),
        h(HeartFill12Icon),
        h(IconCopyButton, {}, "HeartFill12Icon"),
        h(HistoryFill12Icon),
        h(IconCopyButton, {}, "HistoryFill12Icon"),
        h(HomeFill12Icon),
        h(IconCopyButton, {}, "HomeFill12Icon"),
        h(HorizontalRuleFill12Icon),
        h(IconCopyButton, {}, "HorizontalRuleFill12Icon"),
        h(ImageFill12Icon),
        h(IconCopyButton, {}, "ImageFill12Icon"),
        h(InboxFill12Icon),
        h(IconCopyButton, {}, "InboxFill12Icon"),
        h(IndentDecreaseFill12Icon),
        h(IconCopyButton, {}, "IndentDecreaseFill12Icon"),
        h(IndentIncreaseFill12Icon),
        h(IconCopyButton, {}, "IndentIncreaseFill12Icon"),
        h(InfoFill12Icon),
        h(IconCopyButton, {}, "InfoFill12Icon"),
        h(InterlockingRingsFill12Icon),
        h(IconCopyButton, {}, "InterlockingRingsFill12Icon"),
        h(ItalicFill12Icon),
        h(IconCopyButton, {}, "ItalicFill12Icon"),
        h(LeafFill12Icon),
        h(IconCopyButton, {}, "LeafFill12Icon"),
        h(LifesaverFill12Icon),
        h(IconCopyButton, {}, "LifesaverFill12Icon"),
        h(LightbulbFill12Icon),
        h(IconCopyButton, {}, "LightbulbFill12Icon"),
        h(LightningBoltFill12Icon),
        h(IconCopyButton, {}, "LightningBoltFill12Icon"),
        h(LineGraphFill12Icon),
        h(IconCopyButton, {}, "LineGraphFill12Icon"),
        h(LineSocialFill12Icon),
        h(IconCopyButton, {}, "LineSocialFill12Icon"),
        h(LinkFill12Icon),
        h(IconCopyButton, {}, "LinkFill12Icon"),
        h(LinkRemoveFill12Icon),
        h(IconCopyButton, {}, "LinkRemoveFill12Icon"),
        h(LinkedinFill12Icon),
        h(IconCopyButton, {}, "LinkedinFill12Icon"),
        h(ListBulletFill12Icon),
        h(IconCopyButton, {}, "ListBulletFill12Icon"),
        h(ListNumberFill12Icon),
        h(IconCopyButton, {}, "ListNumberFill12Icon"),
        h(ListNumberRtlFill12Icon),
        h(IconCopyButton, {}, "ListNumberRtlFill12Icon"),
        h(LocationFill12Icon),
        h(IconCopyButton, {}, "LocationFill12Icon"),
        h(LockLockedFill12Icon),
        h(IconCopyButton, {}, "LockLockedFill12Icon"),
        h(LockUnlockedFill12Icon),
        h(IconCopyButton, {}, "LockUnlockedFill12Icon"),
        h(MarkupFill12Icon),
        h(IconCopyButton, {}, "MarkupFill12Icon"),
        h(MaximizeFill12Icon),
        h(IconCopyButton, {}, "MaximizeFill12Icon"),
        h(MegaphoneFill12Icon),
        h(IconCopyButton, {}, "MegaphoneFill12Icon"),
        h(MenuFill12Icon),
        h(IconCopyButton, {}, "MenuFill12Icon"),
        h(MessengerFill12Icon),
        h(IconCopyButton, {}, "MessengerFill12Icon"),
        h(MicrophoneOffFill12Icon),
        h(IconCopyButton, {}, "MicrophoneOffFill12Icon"),
        h(MicrophoneOnFill12Icon),
        h(IconCopyButton, {}, "MicrophoneOnFill12Icon"),
        h(MinimizeFill12Icon),
        h(IconCopyButton, {}, "MinimizeFill12Icon"),
        h(MobilePhoneFill12Icon),
        h(IconCopyButton, {}, "MobilePhoneFill12Icon"),
        h(MonitorFill12Icon),
        h(IconCopyButton, {}, "MonitorFill12Icon"),
        h(MultilineFill12Icon),
        h(IconCopyButton, {}, "MultilineFill12Icon"),
        h(NewWindowFill12Icon),
        h(IconCopyButton, {}, "NewWindowFill12Icon"),
        h(NotesFill12Icon),
        h(IconCopyButton, {}, "NotesFill12Icon"),
        h(NotificationFill12Icon),
        h(IconCopyButton, {}, "NotificationFill12Icon"),
        h(NumberFill12Icon),
        h(IconCopyButton, {}, "NumberFill12Icon"),
        h(OriginalSizeFill12Icon),
        h(IconCopyButton, {}, "OriginalSizeFill12Icon"),
        h(OverflowFill12Icon),
        h(IconCopyButton, {}, "OverflowFill12Icon"),
        h(OverflowVerticalFill12Icon),
        h(IconCopyButton, {}, "OverflowVerticalFill12Icon"),
        h(PaletteFill12Icon),
        h(IconCopyButton, {}, "PaletteFill12Icon"),
        h(PanelsFill12Icon),
        h(IconCopyButton, {}, "PanelsFill12Icon"),
        h(ParenthesesFill12Icon),
        h(IconCopyButton, {}, "ParenthesesFill12Icon"),
        h(PauseFill12Icon),
        h(IconCopyButton, {}, "PauseFill12Icon"),
        h(PencilFill12Icon),
        h(IconCopyButton, {}, "PencilFill12Icon"),
        h(PhoneCallEndFill12Icon),
        h(IconCopyButton, {}, "PhoneCallEndFill12Icon"),
        h(PhoneCallInFill12Icon),
        h(IconCopyButton, {}, "PhoneCallInFill12Icon"),
        h(PhoneCallOutFill12Icon),
        h(IconCopyButton, {}, "PhoneCallOutFill12Icon"),
        h(PhoneCallPauseFill12Icon),
        h(IconCopyButton, {}, "PhoneCallPauseFill12Icon"),
        h(PhoneCallSpeakerFill12Icon),
        h(IconCopyButton, {}, "PhoneCallSpeakerFill12Icon"),
        h(PhoneCallTransferFill12Icon),
        h(IconCopyButton, {}, "PhoneCallTransferFill12Icon"),
        h(PhoneCallTransferOnlyFill12Icon),
        h(IconCopyButton, {}, "PhoneCallTransferOnlyFill12Icon"),
        h(PhoneFill12Icon),
        h(IconCopyButton, {}, "PhoneFill12Icon"),
        h(PinFill12Icon),
        h(IconCopyButton, {}, "PinFill12Icon"),
        h(PinRemoveFill12Icon),
        h(IconCopyButton, {}, "PinRemoveFill12Icon"),
        h(PlayCircleFill12Icon),
        h(IconCopyButton, {}, "PlayCircleFill12Icon"),
        h(PlayFill12Icon),
        h(IconCopyButton, {}, "PlayFill12Icon"),
        h(PlugFill12Icon),
        h(IconCopyButton, {}, "PlugFill12Icon"),
        h(PlusCircleFill12Icon),
        h(IconCopyButton, {}, "PlusCircleFill12Icon"),
        h(PlusFill12Icon),
        h(IconCopyButton, {}, "PlusFill12Icon"),
        h(PuzzlePieceFill12Icon),
        h(IconCopyButton, {}, "PuzzlePieceFill12Icon"),
        h(QuestionMarkFill12Icon),
        h(IconCopyButton, {}, "QuestionMarkFill12Icon"),
        h(QuoteFill12Icon),
        h(IconCopyButton, {}, "QuoteFill12Icon"),
        h(RearrangeFill12Icon),
        h(IconCopyButton, {}, "RearrangeFill12Icon"),
        h(RecordFill12Icon),
        h(IconCopyButton, {}, "RecordFill12Icon"),
        h(ReloadFill12Icon),
        h(IconCopyButton, {}, "ReloadFill12Icon"),
        h(SandboxFill12Icon),
        h(IconCopyButton, {}, "SandboxFill12Icon"),
        h(SearchFill12Icon),
        h(IconCopyButton, {}, "SearchFill12Icon"),
        h(ShapesFill12Icon),
        h(IconCopyButton, {}, "ShapesFill12Icon"),
        h(ShareFill12Icon),
        h(IconCopyButton, {}, "ShareFill12Icon"),
        h(ShieldFill12Icon),
        h(IconCopyButton, {}, "ShieldFill12Icon"),
        h(ShoppingCartFill12Icon),
        h(IconCopyButton, {}, "ShoppingCartFill12Icon"),
        h(SignpostFill12Icon),
        h(IconCopyButton, {}, "SignpostFill12Icon"),
        h(SlackFill12Icon),
        h(IconCopyButton, {}, "SlackFill12Icon"),
        h(SmileSlightFill12Icon),
        h(IconCopyButton, {}, "SmileSlightFill12Icon"),
        h(SmileyFill12Icon),
        h(IconCopyButton, {}, "SmileyFill12Icon"),
        h(SortFill12Icon),
        h(IconCopyButton, {}, "SortFill12Icon"),
        h(SpeechBubbleConversationFill12Icon),
        h(IconCopyButton, {}, "SpeechBubbleConversationFill12Icon"),
        h(SpeechBubbleLightningBoltFill12Icon),
        h(IconCopyButton, {}, "SpeechBubbleLightningBoltFill12Icon"),
        h(SpeechBubblePlainFill12Icon),
        h(IconCopyButton, {}, "SpeechBubblePlainFill12Icon"),
        h(StarFill12Icon),
        h(IconCopyButton, {}, "StarFill12Icon"),
        h(TableFill12Icon),
        h(IconCopyButton, {}, "TableFill12Icon"),
        h(TagFill12Icon),
        h(IconCopyButton, {}, "TagFill12Icon"),
        h(TerminalCliFill12Icon),
        h(IconCopyButton, {}, "TerminalCliFill12Icon"),
        h(TerminalWindowFill12Icon),
        h(IconCopyButton, {}, "TerminalWindowFill12Icon"),
        h(TextColorFill12Icon),
        h(IconCopyButton, {}, "TextColorFill12Icon"),
        h(TextFill12Icon),
        h(IconCopyButton, {}, "TextFill12Icon"),
        h(ThumbsDownFill12Icon),
        h(IconCopyButton, {}, "ThumbsDownFill12Icon"),
        h(ThumbsUpFill12Icon),
        h(IconCopyButton, {}, "ThumbsUpFill12Icon"),
        h(TranslationCreatedFill12Icon),
        h(IconCopyButton, {}, "TranslationCreatedFill12Icon"),
        h(TranslationDeletedFill12Icon),
        h(IconCopyButton, {}, "TranslationDeletedFill12Icon"),
        h(TranslationExistsFill12Icon),
        h(IconCopyButton, {}, "TranslationExistsFill12Icon"),
        h(TranslationOutdatedFill12Icon),
        h(IconCopyButton, {}, "TranslationOutdatedFill12Icon"),
        h(TranslationUpdatedFill12Icon),
        h(IconCopyButton, {}, "TranslationUpdatedFill12Icon"),
        h(TrashFill12Icon),
        h(IconCopyButton, {}, "TrashFill12Icon"),
        h(TwitterFill12Icon),
        h(IconCopyButton, {}, "TwitterFill12Icon"),
        h(UnderlineFill12Icon),
        h(IconCopyButton, {}, "UnderlineFill12Icon"),
        h(UploadFill12Icon),
        h(IconCopyButton, {}, "UploadFill12Icon"),
        h(UserCircleFill12Icon),
        h(IconCopyButton, {}, "UserCircleFill12Icon"),
        h(UserFollowFill12Icon),
        h(IconCopyButton, {}, "UserFollowFill12Icon"),
        h(UserGroupFill12Icon),
        h(IconCopyButton, {}, "UserGroupFill12Icon"),
        h(UserListFill12Icon),
        h(IconCopyButton, {}, "UserListFill12Icon"),
        h(UserSoloFill12Icon),
        h(IconCopyButton, {}, "UserSoloFill12Icon"),
        h(UserUnfollowFill12Icon),
        h(IconCopyButton, {}, "UserUnfollowFill12Icon"),
        h(VoicemailFill12Icon),
        h(IconCopyButton, {}, "VoicemailFill12Icon"),
        h(VolumeMutedFill12Icon),
        h(IconCopyButton, {}, "VolumeMutedFill12Icon"),
        h(VolumeUnmutedFill12Icon),
        h(IconCopyButton, {}, "VolumeUnmutedFill12Icon"),
        h(WechatFill12Icon),
        h(IconCopyButton, {}, "WechatFill12Icon"),
        h(WhatsappFill12Icon),
        h(IconCopyButton, {}, "WhatsappFill12Icon"),
        h(WrapLeftFill12Icon),
        h(IconCopyButton, {}, "WrapLeftFill12Icon"),
        h(WrapRightFill12Icon),
        h(IconCopyButton, {}, "WrapRightFill12Icon"),
        h(XCircleFill12Icon),
        h(IconCopyButton, {}, "XCircleFill12Icon"),
        h(XFill12Icon),
        h(IconCopyButton, {}, "XFill12Icon"),
        h(ZendeskFill12Icon),
        h(IconCopyButton, {}, "ZendeskFill12Icon"),
      ),
    ];
  }
}
