import CreateNote from './create-note';
import Home from './home';
import MyNotes from './mynotes';
import NoteEditor from './note-editor';
import Dev from './dev';
import Loading from './loading';
import TriggerLoading from './trigger.loading';
import Settings from './settings';
import { Converter } from './converter';

export const screenkeys = [
    'home',
    'mynotes',
    'create-note',
    'note-editor',
    'dev',
    'loading',
    'trigger-loading',
    'settings',
    'converter'
];

export const screencomponents = [
    Home,
    MyNotes,
    CreateNote,
    NoteEditor,
    Dev,
    Loading,
    TriggerLoading,
    Settings,
    Converter
];

export default screenkeys.map((skey, i) => {
    const screen = {
        key: skey,
        component: screencomponents[i]
    };
    return screen;
})