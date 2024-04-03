import { h } from "@dependable/view";
import { Title, SubTitle, Line } from "@dependable/styleguide";
import { Anchor } from "@dependable/components/Anchor/v0";
import { css } from "stylewars";

import TipIcon from "@dependable/icons/LightbulbStroke12Icon";

import I123Fill16Icon from "@dependable/icons/I123Fill16Icon";
import AdjustFill16Icon from "@dependable/icons/AdjustFill16Icon";
import AlertErrorFill16Icon from "@dependable/icons/AlertErrorFill16Icon";
import AlertWarningFill16Icon from "@dependable/icons/AlertWarningFill16Icon";
import AlignCenterFill16Icon from "@dependable/icons/AlignCenterFill16Icon";
import AlignJustifyFill16Icon from "@dependable/icons/AlignJustifyFill16Icon";
import AlignLeftFill16Icon from "@dependable/icons/AlignLeftFill16Icon";
import AlignRightFill16Icon from "@dependable/icons/AlignRightFill16Icon";
import AltTextFill16Icon from "@dependable/icons/AltTextFill16Icon";
import ArrowLeftFill16Icon from "@dependable/icons/ArrowLeftFill16Icon";
import ArrowLeftSmFill16Icon from "@dependable/icons/ArrowLeftSmFill16Icon";
import ArrowLeftUpFill16Icon from "@dependable/icons/ArrowLeftUpFill16Icon";
import ArrowRetweetFill16Icon from "@dependable/icons/ArrowRetweetFill16Icon";
import ArrowReverseFill16Icon from "@dependable/icons/ArrowReverseFill16Icon";
import ArrowTrendingFill16Icon from "@dependable/icons/ArrowTrendingFill16Icon";
import AsteriskFill16Icon from "@dependable/icons/AsteriskFill16Icon";
import AtFill16Icon from "@dependable/icons/AtFill16Icon";
import BarChartFill16Icon from "@dependable/icons/BarChartFill16Icon";
import BasketballFill16Icon from "@dependable/icons/BasketballFill16Icon";
import BoldFill16Icon from "@dependable/icons/BoldFill16Icon";
import BookClosedFill16Icon from "@dependable/icons/BookClosedFill16Icon";
import BookOpenFill16Icon from "@dependable/icons/BookOpenFill16Icon";
import Box3dFill16Icon from "@dependable/icons/Box3dFill16Icon";
import BuildingFill16Icon from "@dependable/icons/BuildingFill16Icon";
import CalendarFill16Icon from "@dependable/icons/CalendarFill16Icon";
import CameraFill16Icon from "@dependable/icons/CameraFill16Icon";
import CarFill16Icon from "@dependable/icons/CarFill16Icon";
import CenterFill16Icon from "@dependable/icons/CenterFill16Icon";
import CheckBadgeFill16Icon from "@dependable/icons/CheckBadgeFill16Icon";
import CheckBoxDoubleFill16Icon from "@dependable/icons/CheckBoxDoubleFill16Icon";
import CheckBoxFill16Icon from "@dependable/icons/CheckBoxFill16Icon";
import CheckCircleFill16Icon from "@dependable/icons/CheckCircleFill16Icon";
import CheckDoubleFill16Icon from "@dependable/icons/CheckDoubleFill16Icon";
import CheckLgFill16Icon from "@dependable/icons/CheckLgFill16Icon";
import CheckSmFill16Icon from "@dependable/icons/CheckSmFill16Icon";
import ChevronBoxFill16Icon from "@dependable/icons/ChevronBoxFill16Icon";
import ChevronDoubleDownFill16Icon from "@dependable/icons/ChevronDoubleDownFill16Icon";
import ChevronDoubleLeftFill16Icon from "@dependable/icons/ChevronDoubleLeftFill16Icon";
import ChevronDoubleRightFill16Icon from "@dependable/icons/ChevronDoubleRightFill16Icon";
import ChevronDoubleUpFill16Icon from "@dependable/icons/ChevronDoubleUpFill16Icon";
import ChevronDownFill16Icon from "@dependable/icons/ChevronDownFill16Icon";
import ChevronLeftFill16Icon from "@dependable/icons/ChevronLeftFill16Icon";
import ChevronRightFill16Icon from "@dependable/icons/ChevronRightFill16Icon";
import ChevronUpFill16Icon from "@dependable/icons/ChevronUpFill16Icon";
import CircleFill16Icon from "@dependable/icons/CircleFill16Icon";
import CircleFullFill16Icon from "@dependable/icons/CircleFullFill16Icon";
import CircleLineFill16Icon from "@dependable/icons/CircleLineFill16Icon";
import CircleSmFill16Icon from "@dependable/icons/CircleSmFill16Icon";
import ClipboardBlankFill16Icon from "@dependable/icons/ClipboardBlankFill16Icon";
import ClipboardCheckFill16Icon from "@dependable/icons/ClipboardCheckFill16Icon";
import ClipboardListFill16Icon from "@dependable/icons/ClipboardListFill16Icon";
import ClockCycleFill16Icon from "@dependable/icons/ClockCycleFill16Icon";
import ClockFill16Icon from "@dependable/icons/ClockFill16Icon";
import ClockInFill16Icon from "@dependable/icons/ClockInFill16Icon";
import ClockOutFill16Icon from "@dependable/icons/ClockOutFill16Icon";
import CopyFill16Icon from "@dependable/icons/CopyFill16Icon";
import CreditCardFill16Icon from "@dependable/icons/CreditCardFill16Icon";
import CssFill16Icon from "@dependable/icons/CssFill16Icon";
import CursorArrowFill16Icon from "@dependable/icons/CursorArrowFill16Icon";
import CutleryFill16Icon from "@dependable/icons/CutleryFill16Icon";
import DashFill16Icon from "@dependable/icons/DashFill16Icon";
import DatabaseFill16Icon from "@dependable/icons/DatabaseFill16Icon";
import DecimalFill16Icon from "@dependable/icons/DecimalFill16Icon";
import DirectionLtrFill16Icon from "@dependable/icons/DirectionLtrFill16Icon";
import DirectionRtlFill16Icon from "@dependable/icons/DirectionRtlFill16Icon";
import DocumentSearchFill16Icon from "@dependable/icons/DocumentSearchFill16Icon";
import DownloadFill16Icon from "@dependable/icons/DownloadFill16Icon";
import DuplicateFill16Icon from "@dependable/icons/DuplicateFill16Icon";
import EditRedoFill16Icon from "@dependable/icons/EditRedoFill16Icon";
import EditUndoFill16Icon from "@dependable/icons/EditUndoFill16Icon";
import EmailFill16Icon from "@dependable/icons/EmailFill16Icon";
import EraserFill16Icon from "@dependable/icons/EraserFill16Icon";
import ExitFill16Icon from "@dependable/icons/ExitFill16Icon";
import EyeFill16Icon from "@dependable/icons/EyeFill16Icon";
import EyeHideFill16Icon from "@dependable/icons/EyeHideFill16Icon";
import FacebookFill16Icon from "@dependable/icons/FacebookFill16Icon";
import FileDocumentFill16Icon from "@dependable/icons/FileDocumentFill16Icon";
import FileErrorFill16Icon from "@dependable/icons/FileErrorFill16Icon";
import FileGenericFill16Icon from "@dependable/icons/FileGenericFill16Icon";
import FileImageFill16Icon from "@dependable/icons/FileImageFill16Icon";
import FilePdfFill16Icon from "@dependable/icons/FilePdfFill16Icon";
import FilePresentationFill16Icon from "@dependable/icons/FilePresentationFill16Icon";
import FileSpreadsheetFill16Icon from "@dependable/icons/FileSpreadsheetFill16Icon";
import FileZipFill16Icon from "@dependable/icons/FileZipFill16Icon";
import FilterFill16Icon from "@dependable/icons/FilterFill16Icon";
import FlagFill16Icon from "@dependable/icons/FlagFill16Icon";
import FolderClosedFill16Icon from "@dependable/icons/FolderClosedFill16Icon";
import FolderOpenFill16Icon from "@dependable/icons/FolderOpenFill16Icon";
import FullWidthFill16Icon from "@dependable/icons/FullWidthFill16Icon";
import GearFill16Icon from "@dependable/icons/GearFill16Icon";
import GithubFill16Icon from "@dependable/icons/GithubFill16Icon";
import GlobeFill16Icon from "@dependable/icons/GlobeFill16Icon";
import Grid2x2Fill16Icon from "@dependable/icons/Grid2x2Fill16Icon";
import Grid3x3Fill16Icon from "@dependable/icons/Grid3x3Fill16Icon";
import HeadingFill16Icon from "@dependable/icons/HeadingFill16Icon";
import HeartFill16Icon from "@dependable/icons/HeartFill16Icon";
import HistoryFill16Icon from "@dependable/icons/HistoryFill16Icon";
import HomeFill16Icon from "@dependable/icons/HomeFill16Icon";
import HorizontalRuleFill16Icon from "@dependable/icons/HorizontalRuleFill16Icon";
import ImageFill16Icon from "@dependable/icons/ImageFill16Icon";
import InboxFill16Icon from "@dependable/icons/InboxFill16Icon";
import IndentDecreaseFill16Icon from "@dependable/icons/IndentDecreaseFill16Icon";
import IndentIncreaseFill16Icon from "@dependable/icons/IndentIncreaseFill16Icon";
import InfoFill16Icon from "@dependable/icons/InfoFill16Icon";
import InterlockingRingsFill16Icon from "@dependable/icons/InterlockingRingsFill16Icon";
import ItalicFill16Icon from "@dependable/icons/ItalicFill16Icon";
import LeafFill16Icon from "@dependable/icons/LeafFill16Icon";
import LifesaverFill16Icon from "@dependable/icons/LifesaverFill16Icon";
import LightbulbFill16Icon from "@dependable/icons/LightbulbFill16Icon";
import LightningBoltFill16Icon from "@dependable/icons/LightningBoltFill16Icon";
import LineGraphFill16Icon from "@dependable/icons/LineGraphFill16Icon";
import LineSocialFill16Icon from "@dependable/icons/LineSocialFill16Icon";
import LinkFill16Icon from "@dependable/icons/LinkFill16Icon";
import LinkRemoveFill16Icon from "@dependable/icons/LinkRemoveFill16Icon";
import LinkedinFill16Icon from "@dependable/icons/LinkedinFill16Icon";
import ListBulletFill16Icon from "@dependable/icons/ListBulletFill16Icon";
import ListNumberFill16Icon from "@dependable/icons/ListNumberFill16Icon";
import ListNumberRtlFill16Icon from "@dependable/icons/ListNumberRtlFill16Icon";
import LocationFill16Icon from "@dependable/icons/LocationFill16Icon";
import LockLockedFill16Icon from "@dependable/icons/LockLockedFill16Icon";
import LockUnlockedFill16Icon from "@dependable/icons/LockUnlockedFill16Icon";
import MarkupFill16Icon from "@dependable/icons/MarkupFill16Icon";
import MaximizeFill16Icon from "@dependable/icons/MaximizeFill16Icon";
import MegaphoneFill16Icon from "@dependable/icons/MegaphoneFill16Icon";
import MenuFill16Icon from "@dependable/icons/MenuFill16Icon";
import MessengerFill16Icon from "@dependable/icons/MessengerFill16Icon";
import MicrophoneOffFill16Icon from "@dependable/icons/MicrophoneOffFill16Icon";
import MicrophoneOnFill16Icon from "@dependable/icons/MicrophoneOnFill16Icon";
import MinimizeFill16Icon from "@dependable/icons/MinimizeFill16Icon";
import MobilePhoneFill16Icon from "@dependable/icons/MobilePhoneFill16Icon";
import MonitorFill16Icon from "@dependable/icons/MonitorFill16Icon";
import MultilineFill16Icon from "@dependable/icons/MultilineFill16Icon";
import NewWindowFill16Icon from "@dependable/icons/NewWindowFill16Icon";
import NotesFill16Icon from "@dependable/icons/NotesFill16Icon";
import NotificationFill16Icon from "@dependable/icons/NotificationFill16Icon";
import NumberFill16Icon from "@dependable/icons/NumberFill16Icon";
import OriginalSizeFill16Icon from "@dependable/icons/OriginalSizeFill16Icon";
import OverflowFill16Icon from "@dependable/icons/OverflowFill16Icon";
import OverflowVerticalFill16Icon from "@dependable/icons/OverflowVerticalFill16Icon";
import PaletteFill16Icon from "@dependable/icons/PaletteFill16Icon";
import PanelsFill16Icon from "@dependable/icons/PanelsFill16Icon";
import ParenthesesFill16Icon from "@dependable/icons/ParenthesesFill16Icon";
import PauseFill16Icon from "@dependable/icons/PauseFill16Icon";
import PencilFill16Icon from "@dependable/icons/PencilFill16Icon";
import PhoneCallEndFill16Icon from "@dependable/icons/PhoneCallEndFill16Icon";
import PhoneCallInFill16Icon from "@dependable/icons/PhoneCallInFill16Icon";
import PhoneCallOutFill16Icon from "@dependable/icons/PhoneCallOutFill16Icon";
import PhoneCallPauseFill16Icon from "@dependable/icons/PhoneCallPauseFill16Icon";
import PhoneCallSpeakerFill16Icon from "@dependable/icons/PhoneCallSpeakerFill16Icon";
import PhoneCallTransferFill16Icon from "@dependable/icons/PhoneCallTransferFill16Icon";
import PhoneCallTransferOnlyFill16Icon from "@dependable/icons/PhoneCallTransferOnlyFill16Icon";
import PhoneFill16Icon from "@dependable/icons/PhoneFill16Icon";
import PinFill16Icon from "@dependable/icons/PinFill16Icon";
import PinRemoveFill16Icon from "@dependable/icons/PinRemoveFill16Icon";
import PlayCircleFill16Icon from "@dependable/icons/PlayCircleFill16Icon";
import PlayFill16Icon from "@dependable/icons/PlayFill16Icon";
import PlugFill16Icon from "@dependable/icons/PlugFill16Icon";
import PlusCircleFill16Icon from "@dependable/icons/PlusCircleFill16Icon";
import PlusFill16Icon from "@dependable/icons/PlusFill16Icon";
import PuzzlePieceFill16Icon from "@dependable/icons/PuzzlePieceFill16Icon";
import QuestionMarkFill16Icon from "@dependable/icons/QuestionMarkFill16Icon";
import QuoteFill16Icon from "@dependable/icons/QuoteFill16Icon";
import RearrangeFill16Icon from "@dependable/icons/RearrangeFill16Icon";
import RecordFill16Icon from "@dependable/icons/RecordFill16Icon";
import ReloadFill16Icon from "@dependable/icons/ReloadFill16Icon";
import SandboxFill16Icon from "@dependable/icons/SandboxFill16Icon";
import SearchFill16Icon from "@dependable/icons/SearchFill16Icon";
import ShapesFill16Icon from "@dependable/icons/ShapesFill16Icon";
import ShareFill16Icon from "@dependable/icons/ShareFill16Icon";
import ShieldFill16Icon from "@dependable/icons/ShieldFill16Icon";
import ShoppingCartFill16Icon from "@dependable/icons/ShoppingCartFill16Icon";
import SignpostFill16Icon from "@dependable/icons/SignpostFill16Icon";
import SlackFill16Icon from "@dependable/icons/SlackFill16Icon";
import SmileSlightFill16Icon from "@dependable/icons/SmileSlightFill16Icon";
import SmileyFill16Icon from "@dependable/icons/SmileyFill16Icon";
import SortFill16Icon from "@dependable/icons/SortFill16Icon";
import SpeechBubbleConversationFill16Icon from "@dependable/icons/SpeechBubbleConversationFill16Icon";
import SpeechBubbleLightningBoltFill16Icon from "@dependable/icons/SpeechBubbleLightningBoltFill16Icon";
import SpeechBubblePlainFill16Icon from "@dependable/icons/SpeechBubblePlainFill16Icon";
import StarFill16Icon from "@dependable/icons/StarFill16Icon";
import TableFill16Icon from "@dependable/icons/TableFill16Icon";
import TagFill16Icon from "@dependable/icons/TagFill16Icon";
import TerminalCliFill16Icon from "@dependable/icons/TerminalCliFill16Icon";
import TerminalWindowFill16Icon from "@dependable/icons/TerminalWindowFill16Icon";
import TextColorFill16Icon from "@dependable/icons/TextColorFill16Icon";
import TextFill16Icon from "@dependable/icons/TextFill16Icon";
import ThumbsDownFill16Icon from "@dependable/icons/ThumbsDownFill16Icon";
import ThumbsUpFill16Icon from "@dependable/icons/ThumbsUpFill16Icon";
import TranslationCreatedFill16Icon from "@dependable/icons/TranslationCreatedFill16Icon";
import TranslationDeletedFill16Icon from "@dependable/icons/TranslationDeletedFill16Icon";
import TranslationExistsFill16Icon from "@dependable/icons/TranslationExistsFill16Icon";
import TranslationOutdatedFill16Icon from "@dependable/icons/TranslationOutdatedFill16Icon";
import TranslationUpdatedFill16Icon from "@dependable/icons/TranslationUpdatedFill16Icon";
import TrashFill16Icon from "@dependable/icons/TrashFill16Icon";
import TwitterFill16Icon from "@dependable/icons/TwitterFill16Icon";
import UnderlineFill16Icon from "@dependable/icons/UnderlineFill16Icon";
import UploadFill16Icon from "@dependable/icons/UploadFill16Icon";
import UserCircleFill16Icon from "@dependable/icons/UserCircleFill16Icon";
import UserFollowFill16Icon from "@dependable/icons/UserFollowFill16Icon";
import UserGroupFill16Icon from "@dependable/icons/UserGroupFill16Icon";
import UserListFill16Icon from "@dependable/icons/UserListFill16Icon";
import UserSoloFill16Icon from "@dependable/icons/UserSoloFill16Icon";
import UserUnfollowFill16Icon from "@dependable/icons/UserUnfollowFill16Icon";
import VoicemailFill16Icon from "@dependable/icons/VoicemailFill16Icon";
import VolumeMutedFill16Icon from "@dependable/icons/VolumeMutedFill16Icon";
import VolumeUnmutedFill16Icon from "@dependable/icons/VolumeUnmutedFill16Icon";
import WechatFill16Icon from "@dependable/icons/WechatFill16Icon";
import WhatsappFill16Icon from "@dependable/icons/WhatsappFill16Icon";
import WrapLeftFill16Icon from "@dependable/icons/WrapLeftFill16Icon";
import WrapRightFill16Icon from "@dependable/icons/WrapRightFill16Icon";
import XCircleFill16Icon from "@dependable/icons/XCircleFill16Icon";
import XFill16Icon from "@dependable/icons/XFill16Icon";
import ZendeskFill16Icon from "@dependable/icons/ZendeskFill16Icon";

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
    font-family: var(--dc-font-family);
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
      h(Title, {}, "16px (fill)"),
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
        h(I123Fill16Icon),
        h(IconCopyButton, {}, "I123Fill16Icon"),
        h(AdjustFill16Icon),
        h(IconCopyButton, {}, "AdjustFill16Icon"),
        h(AlertErrorFill16Icon),
        h(IconCopyButton, {}, "AlertErrorFill16Icon"),
        h(AlertWarningFill16Icon),
        h(IconCopyButton, {}, "AlertWarningFill16Icon"),
        h(AlignCenterFill16Icon),
        h(IconCopyButton, {}, "AlignCenterFill16Icon"),
        h(AlignJustifyFill16Icon),
        h(IconCopyButton, {}, "AlignJustifyFill16Icon"),
        h(AlignLeftFill16Icon),
        h(IconCopyButton, {}, "AlignLeftFill16Icon"),
        h(AlignRightFill16Icon),
        h(IconCopyButton, {}, "AlignRightFill16Icon"),
        h(AltTextFill16Icon),
        h(IconCopyButton, {}, "AltTextFill16Icon"),
        h(ArrowLeftFill16Icon),
        h(IconCopyButton, {}, "ArrowLeftFill16Icon"),
        h(ArrowLeftSmFill16Icon),
        h(IconCopyButton, {}, "ArrowLeftSmFill16Icon"),
        h(ArrowLeftUpFill16Icon),
        h(IconCopyButton, {}, "ArrowLeftUpFill16Icon"),
        h(ArrowRetweetFill16Icon),
        h(IconCopyButton, {}, "ArrowRetweetFill16Icon"),
        h(ArrowReverseFill16Icon),
        h(IconCopyButton, {}, "ArrowReverseFill16Icon"),
        h(ArrowTrendingFill16Icon),
        h(IconCopyButton, {}, "ArrowTrendingFill16Icon"),
        h(AsteriskFill16Icon),
        h(IconCopyButton, {}, "AsteriskFill16Icon"),
        h(AtFill16Icon),
        h(IconCopyButton, {}, "AtFill16Icon"),
        h(BarChartFill16Icon),
        h(IconCopyButton, {}, "BarChartFill16Icon"),
        h(BasketballFill16Icon),
        h(IconCopyButton, {}, "BasketballFill16Icon"),
        h(BoldFill16Icon),
        h(IconCopyButton, {}, "BoldFill16Icon"),
        h(BookClosedFill16Icon),
        h(IconCopyButton, {}, "BookClosedFill16Icon"),
        h(BookOpenFill16Icon),
        h(IconCopyButton, {}, "BookOpenFill16Icon"),
        h(Box3dFill16Icon),
        h(IconCopyButton, {}, "Box3dFill16Icon"),
        h(BuildingFill16Icon),
        h(IconCopyButton, {}, "BuildingFill16Icon"),
        h(CalendarFill16Icon),
        h(IconCopyButton, {}, "CalendarFill16Icon"),
        h(CameraFill16Icon),
        h(IconCopyButton, {}, "CameraFill16Icon"),
        h(CarFill16Icon),
        h(IconCopyButton, {}, "CarFill16Icon"),
        h(CenterFill16Icon),
        h(IconCopyButton, {}, "CenterFill16Icon"),
        h(CheckBadgeFill16Icon),
        h(IconCopyButton, {}, "CheckBadgeFill16Icon"),
        h(CheckBoxDoubleFill16Icon),
        h(IconCopyButton, {}, "CheckBoxDoubleFill16Icon"),
        h(CheckBoxFill16Icon),
        h(IconCopyButton, {}, "CheckBoxFill16Icon"),
        h(CheckCircleFill16Icon),
        h(IconCopyButton, {}, "CheckCircleFill16Icon"),
        h(CheckDoubleFill16Icon),
        h(IconCopyButton, {}, "CheckDoubleFill16Icon"),
        h(CheckLgFill16Icon),
        h(IconCopyButton, {}, "CheckLgFill16Icon"),
        h(CheckSmFill16Icon),
        h(IconCopyButton, {}, "CheckSmFill16Icon"),
        h(ChevronBoxFill16Icon),
        h(IconCopyButton, {}, "ChevronBoxFill16Icon"),
        h(ChevronDoubleDownFill16Icon),
        h(IconCopyButton, {}, "ChevronDoubleDownFill16Icon"),
        h(ChevronDoubleLeftFill16Icon),
        h(IconCopyButton, {}, "ChevronDoubleLeftFill16Icon"),
        h(ChevronDoubleRightFill16Icon),
        h(IconCopyButton, {}, "ChevronDoubleRightFill16Icon"),
        h(ChevronDoubleUpFill16Icon),
        h(IconCopyButton, {}, "ChevronDoubleUpFill16Icon"),
        h(ChevronDownFill16Icon),
        h(IconCopyButton, {}, "ChevronDownFill16Icon"),
        h(ChevronLeftFill16Icon),
        h(IconCopyButton, {}, "ChevronLeftFill16Icon"),
        h(ChevronRightFill16Icon),
        h(IconCopyButton, {}, "ChevronRightFill16Icon"),
        h(ChevronUpFill16Icon),
        h(IconCopyButton, {}, "ChevronUpFill16Icon"),
        h(CircleFill16Icon),
        h(IconCopyButton, {}, "CircleFill16Icon"),
        h(CircleFullFill16Icon),
        h(IconCopyButton, {}, "CircleFullFill16Icon"),
        h(CircleLineFill16Icon),
        h(IconCopyButton, {}, "CircleLineFill16Icon"),
        h(CircleSmFill16Icon),
        h(IconCopyButton, {}, "CircleSmFill16Icon"),
        h(ClipboardBlankFill16Icon),
        h(IconCopyButton, {}, "ClipboardBlankFill16Icon"),
        h(ClipboardCheckFill16Icon),
        h(IconCopyButton, {}, "ClipboardCheckFill16Icon"),
        h(ClipboardListFill16Icon),
        h(IconCopyButton, {}, "ClipboardListFill16Icon"),
        h(ClockCycleFill16Icon),
        h(IconCopyButton, {}, "ClockCycleFill16Icon"),
        h(ClockFill16Icon),
        h(IconCopyButton, {}, "ClockFill16Icon"),
        h(ClockInFill16Icon),
        h(IconCopyButton, {}, "ClockInFill16Icon"),
        h(ClockOutFill16Icon),
        h(IconCopyButton, {}, "ClockOutFill16Icon"),
        h(CopyFill16Icon),
        h(IconCopyButton, {}, "CopyFill16Icon"),
        h(CreditCardFill16Icon),
        h(IconCopyButton, {}, "CreditCardFill16Icon"),
        h(CssFill16Icon),
        h(IconCopyButton, {}, "CssFill16Icon"),
        h(CursorArrowFill16Icon),
        h(IconCopyButton, {}, "CursorArrowFill16Icon"),
        h(CutleryFill16Icon),
        h(IconCopyButton, {}, "CutleryFill16Icon"),
        h(DashFill16Icon),
        h(IconCopyButton, {}, "DashFill16Icon"),
        h(DatabaseFill16Icon),
        h(IconCopyButton, {}, "DatabaseFill16Icon"),
        h(DecimalFill16Icon),
        h(IconCopyButton, {}, "DecimalFill16Icon"),
        h(DirectionLtrFill16Icon),
        h(IconCopyButton, {}, "DirectionLtrFill16Icon"),
        h(DirectionRtlFill16Icon),
        h(IconCopyButton, {}, "DirectionRtlFill16Icon"),
        h(DocumentSearchFill16Icon),
        h(IconCopyButton, {}, "DocumentSearchFill16Icon"),
        h(DownloadFill16Icon),
        h(IconCopyButton, {}, "DownloadFill16Icon"),
        h(DuplicateFill16Icon),
        h(IconCopyButton, {}, "DuplicateFill16Icon"),
        h(EditRedoFill16Icon),
        h(IconCopyButton, {}, "EditRedoFill16Icon"),
        h(EditUndoFill16Icon),
        h(IconCopyButton, {}, "EditUndoFill16Icon"),
        h(EmailFill16Icon),
        h(IconCopyButton, {}, "EmailFill16Icon"),
        h(EraserFill16Icon),
        h(IconCopyButton, {}, "EraserFill16Icon"),
        h(ExitFill16Icon),
        h(IconCopyButton, {}, "ExitFill16Icon"),
        h(EyeFill16Icon),
        h(IconCopyButton, {}, "EyeFill16Icon"),
        h(EyeHideFill16Icon),
        h(IconCopyButton, {}, "EyeHideFill16Icon"),
        h(FacebookFill16Icon),
        h(IconCopyButton, {}, "FacebookFill16Icon"),
        h(FileDocumentFill16Icon),
        h(IconCopyButton, {}, "FileDocumentFill16Icon"),
        h(FileErrorFill16Icon),
        h(IconCopyButton, {}, "FileErrorFill16Icon"),
        h(FileGenericFill16Icon),
        h(IconCopyButton, {}, "FileGenericFill16Icon"),
        h(FileImageFill16Icon),
        h(IconCopyButton, {}, "FileImageFill16Icon"),
        h(FilePdfFill16Icon),
        h(IconCopyButton, {}, "FilePdfFill16Icon"),
        h(FilePresentationFill16Icon),
        h(IconCopyButton, {}, "FilePresentationFill16Icon"),
        h(FileSpreadsheetFill16Icon),
        h(IconCopyButton, {}, "FileSpreadsheetFill16Icon"),
        h(FileZipFill16Icon),
        h(IconCopyButton, {}, "FileZipFill16Icon"),
        h(FilterFill16Icon),
        h(IconCopyButton, {}, "FilterFill16Icon"),
        h(FlagFill16Icon),
        h(IconCopyButton, {}, "FlagFill16Icon"),
        h(FolderClosedFill16Icon),
        h(IconCopyButton, {}, "FolderClosedFill16Icon"),
        h(FolderOpenFill16Icon),
        h(IconCopyButton, {}, "FolderOpenFill16Icon"),
        h(FullWidthFill16Icon),
        h(IconCopyButton, {}, "FullWidthFill16Icon"),
        h(GearFill16Icon),
        h(IconCopyButton, {}, "GearFill16Icon"),
        h(GithubFill16Icon),
        h(IconCopyButton, {}, "GithubFill16Icon"),
        h(GlobeFill16Icon),
        h(IconCopyButton, {}, "GlobeFill16Icon"),
        h(Grid2x2Fill16Icon),
        h(IconCopyButton, {}, "Grid2x2Fill16Icon"),
        h(Grid3x3Fill16Icon),
        h(IconCopyButton, {}, "Grid3x3Fill16Icon"),
        h(HeadingFill16Icon),
        h(IconCopyButton, {}, "HeadingFill16Icon"),
        h(HeartFill16Icon),
        h(IconCopyButton, {}, "HeartFill16Icon"),
        h(HistoryFill16Icon),
        h(IconCopyButton, {}, "HistoryFill16Icon"),
        h(HomeFill16Icon),
        h(IconCopyButton, {}, "HomeFill16Icon"),
        h(HorizontalRuleFill16Icon),
        h(IconCopyButton, {}, "HorizontalRuleFill16Icon"),
        h(ImageFill16Icon),
        h(IconCopyButton, {}, "ImageFill16Icon"),
        h(InboxFill16Icon),
        h(IconCopyButton, {}, "InboxFill16Icon"),
        h(IndentDecreaseFill16Icon),
        h(IconCopyButton, {}, "IndentDecreaseFill16Icon"),
        h(IndentIncreaseFill16Icon),
        h(IconCopyButton, {}, "IndentIncreaseFill16Icon"),
        h(InfoFill16Icon),
        h(IconCopyButton, {}, "InfoFill16Icon"),
        h(InterlockingRingsFill16Icon),
        h(IconCopyButton, {}, "InterlockingRingsFill16Icon"),
        h(ItalicFill16Icon),
        h(IconCopyButton, {}, "ItalicFill16Icon"),
        h(LeafFill16Icon),
        h(IconCopyButton, {}, "LeafFill16Icon"),
        h(LifesaverFill16Icon),
        h(IconCopyButton, {}, "LifesaverFill16Icon"),
        h(LightbulbFill16Icon),
        h(IconCopyButton, {}, "LightbulbFill16Icon"),
        h(LightningBoltFill16Icon),
        h(IconCopyButton, {}, "LightningBoltFill16Icon"),
        h(LineGraphFill16Icon),
        h(IconCopyButton, {}, "LineGraphFill16Icon"),
        h(LineSocialFill16Icon),
        h(IconCopyButton, {}, "LineSocialFill16Icon"),
        h(LinkFill16Icon),
        h(IconCopyButton, {}, "LinkFill16Icon"),
        h(LinkRemoveFill16Icon),
        h(IconCopyButton, {}, "LinkRemoveFill16Icon"),
        h(LinkedinFill16Icon),
        h(IconCopyButton, {}, "LinkedinFill16Icon"),
        h(ListBulletFill16Icon),
        h(IconCopyButton, {}, "ListBulletFill16Icon"),
        h(ListNumberFill16Icon),
        h(IconCopyButton, {}, "ListNumberFill16Icon"),
        h(ListNumberRtlFill16Icon),
        h(IconCopyButton, {}, "ListNumberRtlFill16Icon"),
        h(LocationFill16Icon),
        h(IconCopyButton, {}, "LocationFill16Icon"),
        h(LockLockedFill16Icon),
        h(IconCopyButton, {}, "LockLockedFill16Icon"),
        h(LockUnlockedFill16Icon),
        h(IconCopyButton, {}, "LockUnlockedFill16Icon"),
        h(MarkupFill16Icon),
        h(IconCopyButton, {}, "MarkupFill16Icon"),
        h(MaximizeFill16Icon),
        h(IconCopyButton, {}, "MaximizeFill16Icon"),
        h(MegaphoneFill16Icon),
        h(IconCopyButton, {}, "MegaphoneFill16Icon"),
        h(MenuFill16Icon),
        h(IconCopyButton, {}, "MenuFill16Icon"),
        h(MessengerFill16Icon),
        h(IconCopyButton, {}, "MessengerFill16Icon"),
        h(MicrophoneOffFill16Icon),
        h(IconCopyButton, {}, "MicrophoneOffFill16Icon"),
        h(MicrophoneOnFill16Icon),
        h(IconCopyButton, {}, "MicrophoneOnFill16Icon"),
        h(MinimizeFill16Icon),
        h(IconCopyButton, {}, "MinimizeFill16Icon"),
        h(MobilePhoneFill16Icon),
        h(IconCopyButton, {}, "MobilePhoneFill16Icon"),
        h(MonitorFill16Icon),
        h(IconCopyButton, {}, "MonitorFill16Icon"),
        h(MultilineFill16Icon),
        h(IconCopyButton, {}, "MultilineFill16Icon"),
        h(NewWindowFill16Icon),
        h(IconCopyButton, {}, "NewWindowFill16Icon"),
        h(NotesFill16Icon),
        h(IconCopyButton, {}, "NotesFill16Icon"),
        h(NotificationFill16Icon),
        h(IconCopyButton, {}, "NotificationFill16Icon"),
        h(NumberFill16Icon),
        h(IconCopyButton, {}, "NumberFill16Icon"),
        h(OriginalSizeFill16Icon),
        h(IconCopyButton, {}, "OriginalSizeFill16Icon"),
        h(OverflowFill16Icon),
        h(IconCopyButton, {}, "OverflowFill16Icon"),
        h(OverflowVerticalFill16Icon),
        h(IconCopyButton, {}, "OverflowVerticalFill16Icon"),
        h(PaletteFill16Icon),
        h(IconCopyButton, {}, "PaletteFill16Icon"),
        h(PanelsFill16Icon),
        h(IconCopyButton, {}, "PanelsFill16Icon"),
        h(ParenthesesFill16Icon),
        h(IconCopyButton, {}, "ParenthesesFill16Icon"),
        h(PauseFill16Icon),
        h(IconCopyButton, {}, "PauseFill16Icon"),
        h(PencilFill16Icon),
        h(IconCopyButton, {}, "PencilFill16Icon"),
        h(PhoneCallEndFill16Icon),
        h(IconCopyButton, {}, "PhoneCallEndFill16Icon"),
        h(PhoneCallInFill16Icon),
        h(IconCopyButton, {}, "PhoneCallInFill16Icon"),
        h(PhoneCallOutFill16Icon),
        h(IconCopyButton, {}, "PhoneCallOutFill16Icon"),
        h(PhoneCallPauseFill16Icon),
        h(IconCopyButton, {}, "PhoneCallPauseFill16Icon"),
        h(PhoneCallSpeakerFill16Icon),
        h(IconCopyButton, {}, "PhoneCallSpeakerFill16Icon"),
        h(PhoneCallTransferFill16Icon),
        h(IconCopyButton, {}, "PhoneCallTransferFill16Icon"),
        h(PhoneCallTransferOnlyFill16Icon),
        h(IconCopyButton, {}, "PhoneCallTransferOnlyFill16Icon"),
        h(PhoneFill16Icon),
        h(IconCopyButton, {}, "PhoneFill16Icon"),
        h(PinFill16Icon),
        h(IconCopyButton, {}, "PinFill16Icon"),
        h(PinRemoveFill16Icon),
        h(IconCopyButton, {}, "PinRemoveFill16Icon"),
        h(PlayCircleFill16Icon),
        h(IconCopyButton, {}, "PlayCircleFill16Icon"),
        h(PlayFill16Icon),
        h(IconCopyButton, {}, "PlayFill16Icon"),
        h(PlugFill16Icon),
        h(IconCopyButton, {}, "PlugFill16Icon"),
        h(PlusCircleFill16Icon),
        h(IconCopyButton, {}, "PlusCircleFill16Icon"),
        h(PlusFill16Icon),
        h(IconCopyButton, {}, "PlusFill16Icon"),
        h(PuzzlePieceFill16Icon),
        h(IconCopyButton, {}, "PuzzlePieceFill16Icon"),
        h(QuestionMarkFill16Icon),
        h(IconCopyButton, {}, "QuestionMarkFill16Icon"),
        h(QuoteFill16Icon),
        h(IconCopyButton, {}, "QuoteFill16Icon"),
        h(RearrangeFill16Icon),
        h(IconCopyButton, {}, "RearrangeFill16Icon"),
        h(RecordFill16Icon),
        h(IconCopyButton, {}, "RecordFill16Icon"),
        h(ReloadFill16Icon),
        h(IconCopyButton, {}, "ReloadFill16Icon"),
        h(SandboxFill16Icon),
        h(IconCopyButton, {}, "SandboxFill16Icon"),
        h(SearchFill16Icon),
        h(IconCopyButton, {}, "SearchFill16Icon"),
        h(ShapesFill16Icon),
        h(IconCopyButton, {}, "ShapesFill16Icon"),
        h(ShareFill16Icon),
        h(IconCopyButton, {}, "ShareFill16Icon"),
        h(ShieldFill16Icon),
        h(IconCopyButton, {}, "ShieldFill16Icon"),
        h(ShoppingCartFill16Icon),
        h(IconCopyButton, {}, "ShoppingCartFill16Icon"),
        h(SignpostFill16Icon),
        h(IconCopyButton, {}, "SignpostFill16Icon"),
        h(SlackFill16Icon),
        h(IconCopyButton, {}, "SlackFill16Icon"),
        h(SmileSlightFill16Icon),
        h(IconCopyButton, {}, "SmileSlightFill16Icon"),
        h(SmileyFill16Icon),
        h(IconCopyButton, {}, "SmileyFill16Icon"),
        h(SortFill16Icon),
        h(IconCopyButton, {}, "SortFill16Icon"),
        h(SpeechBubbleConversationFill16Icon),
        h(IconCopyButton, {}, "SpeechBubbleConversationFill16Icon"),
        h(SpeechBubbleLightningBoltFill16Icon),
        h(IconCopyButton, {}, "SpeechBubbleLightningBoltFill16Icon"),
        h(SpeechBubblePlainFill16Icon),
        h(IconCopyButton, {}, "SpeechBubblePlainFill16Icon"),
        h(StarFill16Icon),
        h(IconCopyButton, {}, "StarFill16Icon"),
        h(TableFill16Icon),
        h(IconCopyButton, {}, "TableFill16Icon"),
        h(TagFill16Icon),
        h(IconCopyButton, {}, "TagFill16Icon"),
        h(TerminalCliFill16Icon),
        h(IconCopyButton, {}, "TerminalCliFill16Icon"),
        h(TerminalWindowFill16Icon),
        h(IconCopyButton, {}, "TerminalWindowFill16Icon"),
        h(TextColorFill16Icon),
        h(IconCopyButton, {}, "TextColorFill16Icon"),
        h(TextFill16Icon),
        h(IconCopyButton, {}, "TextFill16Icon"),
        h(ThumbsDownFill16Icon),
        h(IconCopyButton, {}, "ThumbsDownFill16Icon"),
        h(ThumbsUpFill16Icon),
        h(IconCopyButton, {}, "ThumbsUpFill16Icon"),
        h(TranslationCreatedFill16Icon),
        h(IconCopyButton, {}, "TranslationCreatedFill16Icon"),
        h(TranslationDeletedFill16Icon),
        h(IconCopyButton, {}, "TranslationDeletedFill16Icon"),
        h(TranslationExistsFill16Icon),
        h(IconCopyButton, {}, "TranslationExistsFill16Icon"),
        h(TranslationOutdatedFill16Icon),
        h(IconCopyButton, {}, "TranslationOutdatedFill16Icon"),
        h(TranslationUpdatedFill16Icon),
        h(IconCopyButton, {}, "TranslationUpdatedFill16Icon"),
        h(TrashFill16Icon),
        h(IconCopyButton, {}, "TrashFill16Icon"),
        h(TwitterFill16Icon),
        h(IconCopyButton, {}, "TwitterFill16Icon"),
        h(UnderlineFill16Icon),
        h(IconCopyButton, {}, "UnderlineFill16Icon"),
        h(UploadFill16Icon),
        h(IconCopyButton, {}, "UploadFill16Icon"),
        h(UserCircleFill16Icon),
        h(IconCopyButton, {}, "UserCircleFill16Icon"),
        h(UserFollowFill16Icon),
        h(IconCopyButton, {}, "UserFollowFill16Icon"),
        h(UserGroupFill16Icon),
        h(IconCopyButton, {}, "UserGroupFill16Icon"),
        h(UserListFill16Icon),
        h(IconCopyButton, {}, "UserListFill16Icon"),
        h(UserSoloFill16Icon),
        h(IconCopyButton, {}, "UserSoloFill16Icon"),
        h(UserUnfollowFill16Icon),
        h(IconCopyButton, {}, "UserUnfollowFill16Icon"),
        h(VoicemailFill16Icon),
        h(IconCopyButton, {}, "VoicemailFill16Icon"),
        h(VolumeMutedFill16Icon),
        h(IconCopyButton, {}, "VolumeMutedFill16Icon"),
        h(VolumeUnmutedFill16Icon),
        h(IconCopyButton, {}, "VolumeUnmutedFill16Icon"),
        h(WechatFill16Icon),
        h(IconCopyButton, {}, "WechatFill16Icon"),
        h(WhatsappFill16Icon),
        h(IconCopyButton, {}, "WhatsappFill16Icon"),
        h(WrapLeftFill16Icon),
        h(IconCopyButton, {}, "WrapLeftFill16Icon"),
        h(WrapRightFill16Icon),
        h(IconCopyButton, {}, "WrapRightFill16Icon"),
        h(XCircleFill16Icon),
        h(IconCopyButton, {}, "XCircleFill16Icon"),
        h(XFill16Icon),
        h(IconCopyButton, {}, "XFill16Icon"),
        h(ZendeskFill16Icon),
        h(IconCopyButton, {}, "ZendeskFill16Icon"),
      ),
    ];
  }
}
