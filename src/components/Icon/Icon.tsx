import React from 'react';

export type IconT =
  | 'address'
  | 'activity'
  | 'airplay'
  | 'alert-circle'
  | 'alert-octagon'
  | 'alert-triangle'
  | 'align-center'
  | 'align-justify'
  | 'align-left'
  | 'align-right'
  | 'anchor'
  | 'aperture'
  | 'archive'
  | 'arrow-down-circle'
  | 'arrow-down-left'
  | 'arrow-down-right'
  | 'arrow-down'
  | 'arrow-left-circle'
  | 'arrow-left'
  | 'arrow-right-circle'
  | 'arrow-right'
  | 'arrow-up-circle'
  | 'arrow-up-left'
  | 'arrow-up-right'
  | 'arrow-up'
  | 'at-sign'
  | 'award'
  | 'bar-chart-2'
  | 'bar-chart'
  | 'battery-charging'
  | 'battery'
  | 'bell-off'
  | 'bell'
  | 'bluetooth'
  | 'bold'
  | 'book-open'
  | 'book'
  | 'bookmark'
  | 'box'
  | 'briefcase'
  | 'calendar'
  | 'camera-off'
  | 'camera'
  | 'cast'
  | 'check-circle'
  | 'check-square'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevrons-down'
  | 'chevrons-left'
  | 'chevrons-right'
  | 'chevrons-up'
  | 'chrome'
  | 'circle'
  | 'clipboard'
  | 'clock'
  | 'cloud-drizzle'
  | 'cloud-lightning'
  | 'cloud-off'
  | 'cloud-rain'
  | 'cloud-snow'
  | 'cloud'
  | 'code'
  | 'codepen'
  | 'codesandbox'
  | 'coffee'
  | 'columns'
  | 'command'
  | 'compass'
  | 'capacity'
  | 'copy'
  | 'corner-down-left'
  | 'corner-down-right'
  | 'corner-left-down'
  | 'corner-left-up'
  | 'corner-right-down'
  | 'corner-right-up'
  | 'corner-up-left'
  | 'corner-up-right'
  | 'cpu'
  | 'credit-card'
  | 'critical-solid'
  | 'critical'
  | 'crop'
  | 'crosshair'
  | 'cross-device'
  | 'database'
  | 'delete'
  | 'disc'
  | 'divide-circle'
  | 'divide-square'
  | 'divide'
  | 'dollar-sign'
  | 'download-cloud'
  | 'download'
  | 'dribbble'
  | 'droplet'
  | 'edit-2'
  | 'edit-3'
  | 'edit'
  | 'external-link'
  | 'eye-off'
  | 'eye'
  | 'facebook'
  | 'fast-forward'
  | 'feather'
  | 'figma'
  | 'file-minus'
  | 'file-plus'
  | 'file-text'
  | 'file'
  | 'film'
  | 'filter'
  | 'flag'
  | 'folder-minus'
  | 'folder-plus'
  | 'folder'
  | 'framer'
  | 'frown'
  | 'fx-account'
  | 'gift'
  | 'git-branch'
  | 'git-commit'
  | 'git-merge'
  | 'git-pull-request'
  | 'github'
  | 'gitlab'
  | 'globe'
  | 'grid'
  | 'hard-drive'
  | 'hash'
  | 'headphones'
  | 'heart'
  | 'help-circle'
  | 'hexagon'
  | 'home'
  | 'image'
  | 'inbox'
  | 'info'
  | 'info-solid'
  | 'instagram'
  | 'italic'
  | 'key'
  | 'layers'
  | 'layout'
  | 'life-buoy'
  | 'link-2'
  | 'link'
  | 'linkedin'
  | 'list'
  | 'loader'
  | 'lock'
  | 'log-in'
  | 'log-out'
  | 'mail'
  | 'map-pin'
  | 'map'
  | 'maximize-2'
  | 'maximize'
  | 'meh'
  | 'menu'
  | 'message-circle'
  | 'message-square'
  | 'mic-off'
  | 'mic'
  | 'minimize-2'
  | 'minimize'
  | 'minus-circle'
  | 'minus-square'
  | 'minus'
  | 'monitor'
  | 'moon'
  | 'more-horizontal'
  | 'more-vertical'
  | 'mouse-pointer'
  | 'move'
  | 'music'
  | 'navigation-2'
  | 'navigation'
  | 'octagon'
  | 'package'
  | 'paperclip'
  | 'pause-circle'
  | 'pause'
  | 'pen-tool'
  | 'percent'
  | 'phone-call'
  | 'phone-forwarded'
  | 'phone-incoming'
  | 'phone-missed'
  | 'phone-off'
  | 'phone-outgoing'
  | 'phone'
  | 'pie-chart'
  | 'play-circle'
  | 'play'
  | 'plus-circle'
  | 'plus-square'
  | 'plus'
  | 'pocket'
  | 'power'
  | 'printer'
  | 'radio'
  | 'refresh-ccw'
  | 'refresh-cw'
  | 'repeat'
  | 'rewind'
  | 'rotate-ccw'
  | 'rotate-cw'
  | 'rss'
  | 'save'
  | 'scissors'
  | 'search'
  | 'send'
  | 'settings'
  | 'server'
  | 'share-2'
  | 'share'
  | 'shield-off'
  | 'shield'
  | 'shopping-bag'
  | 'shopping-cart'
  | 'shuffle'
  | 'sidebar'
  | 'skip-back'
  | 'skip-forward'
  | 'slack'
  | 'slash'
  | 'sliders'
  | 'smartphone'
  | 'smile'
  | 'speaker'
  | 'square'
  | 'star'
  | 'stop-circle'
  | 'storage'
  | 'spaces'
  | 'space'
  | 'shield'
  | 'sun'
  | 'sunrise'
  | 'sunset'
  | 'table'
  | 'tablet'
  | 'tag'
  | 'target'
  | 'terminal'
  | 'thermometer'
  | 'thumbs-down'
  | 'thumbs-up'
  | 'toggle-left'
  | 'toggle-right'
  | 'tool'
  | 'trash-2'
  | 'trash'
  | 'trello'
  | 'trending-down'
  | 'trending-up'
  | 'triangle'
  | 'truck'
  | 'tv'
  | 'twitch'
  | 'twitter'
  | 'type'
  | 'umbrella'
  | 'underline'
  | 'unlock'
  | 'upload-cloud'
  | 'upload'
  | 'user-check'
  | 'user-minus'
  | 'user-plus'
  | 'user-x'
  | 'user'
  | 'users'
  | 'video-off'
  | 'video'
  | 'voicemail'
  | 'volume-1'
  | 'volume-2'
  | 'volume-x'
  | 'volume'
  | 'watch'
  | 'wifi-off'
  | 'wifi'
  | 'wind'
  | 'x-circle'
  | 'x-octagon'
  | 'x-square'
  | 'x'
  | 'youtube'
  | 'zap-off'
  | 'zap'
  | 'zoom-in'
  | 'zoom-out';

type IconProps = {
  name: IconT;
  color?: string;
  size?: number;
  classProp?: string;
};

const Icon = ({
  name,
  color = '#000000',
  size = 20,
  classProp = '',
}: IconProps) => {
  return (
    <svg
      className={classProp}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      {name === 'address' && (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.48529 12.625C6.64084 15.1305 7.72503 17.3829 9.39524 19.0353C6.72357 18.0458 4.76928 15.5779 4.52567 12.625H6.48529ZM7.73808 12.625C7.93685 15.4213 9.45869 17.8467 11.6742 19.2684C14.2208 17.9572 15.9974 15.4909 16.2524 12.625H7.73808ZM16.2662 11.375H7.73807C7.94136 8.51444 9.52924 6.04197 11.8279 4.63512C14.3443 5.9936 16.0742 8.49191 16.2662 11.375ZM17.5068 12.625C17.304 15.273 15.9823 17.6149 14.0027 19.2296C16.979 18.407 19.2128 15.7956 19.4743 12.625H17.5068ZM19.4743 11.375H17.5187C17.3711 8.80167 16.1675 6.50538 14.3252 4.86742C17.1393 5.7842 19.2223 8.32002 19.4743 11.375ZM6.48528 11.375H4.52567C4.76928 8.42215 6.72346 5.95433 9.39503 4.96475C7.7249 6.61724 6.64079 8.86953 6.48528 11.375ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            fill={color}
            stroke="none"
          />
        </>
      )}

      {name === 'activity' && (
        <>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </>
      )}

      {name === 'airplay' && (
        <>
          <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
          <polygon points="12 15 17 21 7 21 12 15"></polygon>
        </>
      )}

      {name === 'alert-circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </>
      )}

      {name === 'alert-octagon' && (
        <>
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </>
      )}

      {name === 'alert-triangle' && (
        <>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </>
      )}

      {name === 'star' && (
        <>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </>
      )}

      {name === 'align-center' && (
        <>
          <line x1="18" y1="10" x2="6" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="18" y1="18" x2="6" y2="18"></line>
        </>
      )}

      {name === 'align-justify' && (
        <>
          <line x1="21" y1="10" x2="3" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="21" y1="18" x2="3" y2="18"></line>
        </>
      )}

      {name === 'align-left' && (
        <>
          <line x1="17" y1="10" x2="3" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="17" y1="18" x2="3" y2="18"></line>
        </>
      )}

      {name === 'align-right' && (
        <>
          <line x1="21" y1="10" x2="7" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="21" y1="18" x2="7" y2="18"></line>
        </>
      )}

      {name === 'anchor' && (
        <>
          <circle cx="12" cy="5" r="3"></circle>
          <line x1="12" y1="22" x2="12" y2="8"></line>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
        </>
      )}

      {name === 'aperture' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
          <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
          <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
          <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
          <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
          <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
        </>
      )}

      {name === 'archive' && (
        <>
          <polyline points="21 8 21 21 3 21 3 8"></polyline>
          <rect x="1" y="3" width="22" height="5"></rect>
          <line x1="10" y1="12" x2="14" y2="12"></line>
        </>
      )}

      {name === 'arrow-down-circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="8 12 12 16 16 12"></polyline>
          <line x1="12" y1="8" x2="12" y2="16"></line>
        </>
      )}

      {name === 'arrow-down-left' && (
        <>
          <line x1="17" y1="7" x2="7" y2="17"></line>
          <polyline points="17 17 7 17 7 7"></polyline>
        </>
      )}

      {name === 'arrow-down-right' && (
        <>
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </>
      )}

      {name === 'arrow-down' && (
        <>
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </>
      )}

      {name === 'arrow-left-circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 8 8 12 12 16"></polyline>
          <line x1="16" y1="12" x2="8" y2="12"></line>
        </>
      )}

      {name === 'arrow-left' && (
        <>
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </>
      )}

      {name === 'arrow-right-circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 16 16 12 12 8"></polyline>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </>
      )}

      {name === 'arrow-right' && (
        <>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </>
      )}

      {name === 'arrow-up-circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="16 12 12 8 8 12"></polyline>
          <line x1="12" y1="16" x2="12" y2="8"></line>
        </>
      )}

      {name === 'arrow-up-left' && (
        <>
          <line x1="17" y1="17" x2="7" y2="7"></line>
          <polyline points="7 17 7 7 17 7"></polyline>
        </>
      )}

      {name === 'arrow-up-right' && (
        <>
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </>
      )}

      {name === 'arrow-up' && (
        <>
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </>
      )}

      {name === 'at-sign' && (
        <>
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
        </>
      )}

      {name === 'award' && (
        <>
          <circle cx="12" cy="8" r="7"></circle>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
        </>
      )}

      {name === 'bar-chart-2' && (
        <>
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </>
      )}

      {name === 'bar-chart' && (
        <>
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </>
      )}

      {name === 'battery-charging' && (
        <>
          <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path>
          <line x1="23" y1="13" x2="23" y2="11"></line>
          <polyline points="11 6 7 12 13 12 9 18"></polyline>
        </>
      )}

      {name === 'battery' && (
        <>
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect>
          <line x1="23" y1="13" x2="23" y2="11"></line>
        </>
      )}

      {name === 'bell-off' && (
        <>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          <path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
          <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
          <path d="M18 8a6 6 0 0 0-9.33-5"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </>
      )}

      {name === 'bell' && (
        <>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </>
      )}

      {name === 'bluetooth' && (
        <>
          <polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>
        </>
      )}

      {name === 'bold' && (
        <>
          <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
          <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
        </>
      )}

      {name === 'book-open' && (
        <>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </>
      )}

      {name === 'book' && (
        <>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </>
      )}

      {name === 'bookmark' && (
        <>
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </>
      )}

      {name === 'box' && (
        <>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </>
      )}

      {name === 'briefcase' && (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </>
      )}

      {name === 'calendar' && (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </>
      )}

      {name === 'camera-off' && (
        <>
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>
        </>
      )}

      {name === 'camera' && (
        <>
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </>
      )}

      {name === 'cast' && (
        <>
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
          <line x1="2" y1="20" x2="2.01" y2="20"></line>
        </>
      )}

      {name === 'check-circle' && (
        <>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </>
      )}

      {name === 'check-square' && (
        <>
          <polyline points="9 11 12 14 22 4"></polyline>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
        </>
      )}

      {name === 'check' && (
        <>
          <polyline points="20 6 9 17 4 12"></polyline>
        </>
      )}

      {name === 'chevron-down' && (
        <>
          <polyline points="6 9 12 15 18 9"></polyline>
        </>
      )}

      {name === 'chevron-left' && (
        <>
          <polyline points="15 18 9 12 15 6"></polyline>
        </>
      )}

      {name === 'chevron-right' && (
        <>
          <polyline points="9 18 15 12 9 6"></polyline>
        </>
      )}

      {name === 'chevron-up' && (
        <>
          <polyline points="18 15 12 9 6 15"></polyline>
        </>
      )}

      {name === 'chevrons-down' && (
        <>
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </>
      )}

      {name === 'chevrons-left' && (
        <>
          <polyline points="11 17 6 12 11 7"></polyline>
          <polyline points="18 17 13 12 18 7"></polyline>
        </>
      )}

      {name === 'chevrons-right' && (
        <>
          <polyline points="13 17 18 12 13 7"></polyline>
          <polyline points="6 17 11 12 6 7"></polyline>
        </>
      )}

      {name === 'chevrons-up' && (
        <>
          <polyline points="17 11 12 6 7 11"></polyline>
          <polyline points="17 18 12 13 7 18"></polyline>
        </>
      )}

      {name === 'chrome' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="21.17" y1="8" x2="12" y2="8"></line>
          <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
          <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
        </>
      )}

      {name === 'circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
        </>
      )}

      {name === 'clipboard' && (
        <>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </>
      )}

      {name === 'clock' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </>
      )}

      {name === 'cloud-drizzle' && (
        <>
          <line x1="8" y1="19" x2="8" y2="21"></line>
          <line x1="8" y1="13" x2="8" y2="15"></line>
          <line x1="16" y1="19" x2="16" y2="21"></line>
          <line x1="16" y1="13" x2="16" y2="15"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="12" y1="15" x2="12" y2="17"></line>
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
        </>
      )}

      {name === 'cloud-lightning' && (
        <>
          <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
          <polyline points="13 11 9 17 15 17 11 23"></polyline>
        </>
      )}

      {name === 'cloud-off' && (
        <>
          <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </>
      )}

      {name === 'cloud-rain' && (
        <>
          <line x1="16" y1="13" x2="16" y2="21"></line>
          <line x1="8" y1="13" x2="8" y2="21"></line>
          <line x1="12" y1="15" x2="12" y2="23"></line>
          <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>
        </>
      )}

      {name === 'cloud-snow' && (
        <>
          <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
          <line x1="8" y1="16" x2="8.01" y2="16"></line>
          <line x1="8" y1="20" x2="8.01" y2="20"></line>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <line x1="12" y1="22" x2="12.01" y2="22"></line>
          <line x1="16" y1="16" x2="16.01" y2="16"></line>
          <line x1="16" y1="20" x2="16.01" y2="20"></line>
        </>
      )}

      {name === 'cloud' && (
        <>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </>
      )}

      {name === 'credit-card' && (
        <>
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </>
      )}

      {name === 'settings' && (
        <>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </>
      )}

      {name === 'copy' && (
        <>
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </>
      )}

      {name === 'plus-circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </>
      )}

      {name === 'plus-square' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </>
      )}

      {name === 'plus' && (
        <>
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </>
      )}

      {name === 'x-circle' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </>
      )}

      {name === 'x-octagon' && (
        <>
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </>
      )}

      {name === 'x-square' && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="15"></line>
          <line x1="15" y1="9" x2="9" y2="15"></line>
        </>
      )}

      {name === 'x' && (
        <>
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </>
      )}

      {name === 'critical-solid' && (
        <>
          <path
            fill={color}
            stroke="none"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 6C12.5523 6 13 6.44772 13 7V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V7C11 6.44772 11.4477 6 12 6ZM12 19C12.6904 19 13.25 18.4404 13.25 17.75C13.25 17.0596 12.6904 16.5 12 16.5C11.3096 16.5 10.75 17.0596 10.75 17.75C10.75 18.4404 11.3096 19 12 19Z"
          />
        </>
      )}

      {name === 'critical' && (
        <>
          <line
            x1="12"
            y1="7"
            x2="12"
            y2="14"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="17.75" r="1.25" fill="black" />
          <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" />
        </>
      )}

      {name === 'fx-account' && (
        <>
          <path
            fill={color}
            stroke="none"
            d="M23.5424 8.71316V8.70941C23.5306 8.66869 23.5183 8.62797 23.506 8.58725C23.5033 8.57707 23.5001 8.56689 23.4969 8.55724C23.4738 8.48009 23.4503 8.40293 23.4256 8.32631L23.4224 8.3156C23.2721 7.84854 23.0931 7.39118 22.8866 6.9461C22.6865 6.50528 22.4556 6.07915 22.1954 5.6709C21.1906 4.05672 19.8184 2.70293 18.1909 1.71993V1.71993C16.3226 0.591513 14.1808 -0.00333171 11.9981 1.40362e-05C11.6231 1.40362e-05 11.248 0.0182312 10.8826 0.0535938C9.59025 0.189687 7.41169 0.654223 5.6441 2.20643C12.0785 -1.07908 20.6748 2.87725 19.9435 10.2338C19.6831 12.8592 17.4542 14.6632 15.379 14.9675C15.0099 15.0239 14.6347 15.0277 14.2645 14.9788C9.19643 14.2742 9.50666 10.1202 11.0465 8.34399C9.01051 8.33114 7.43152 10.851 8.19878 13.3269C6.43333 10.0489 8.21753 4.91489 11.9992 3.36107C7.55475 2.71812 3.38839 4.87202 2.04943 8.61565C2.20933 7.24725 2.5285 5.90222 3.00047 4.60788C3.00047 4.60788 0.57759 6.52282 0.0835846 10.5499C0.0760834 10.612 0.069118 10.6742 0.0626885 10.7369C0.0600095 10.7583 0.0578662 10.7797 0.055723 10.8017C0.0367915 10.9892 0.0225036 11.178 0.0128592 11.368C0.0128592 11.3825 0.0128592 11.397 0.0128592 11.4114C0.00910866 11.4907 0.00589376 11.5722 0.00375057 11.6504V11.7174C0.00375057 11.8117 0 11.906 0 12.0008C0 18.6292 5.37352 24.0027 12.0019 24.0027C18.6302 24.0027 24 18.6302 24 12.0019C24.0006 10.8897 23.8466 9.78291 23.5424 8.71316V8.71316Z"
          />
        </>
      )}

      {name === 'info-solid' && (
        <>
          <path
            fill={color}
            stroke="none"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 19C11.4477 19 11 18.5523 11 18V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V18C13 18.5523 12.5523 19 12 19ZM12 6C11.3096 6 10.75 6.55964 10.75 7.25C10.75 7.94036 11.3096 8.5 12 8.5C12.6904 8.5 13.25 7.94036 13.25 7.25C13.25 6.55964 12.6904 6 12 6Z"
          />
        </>
      )}

      {name === 'info' && (
        <>
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </>
      )}

      {name === 'storage' && (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6313 3.60127C11.8589 3.46624 12.1411 3.46624 12.3687 3.60127L19.6415 7.91599C19.8636 8.04778 20 8.2883 20 8.54822V15.4518C20 15.7117 19.8636 15.9522 19.6415 16.084L12.3687 20.3987C12.1411 20.5338 11.8589 20.5338 11.6313 20.3987L4.35853 16.084C4.13639 15.9522 4 15.7117 4 15.4518V8.54822C4 8.2883 4.13639 8.04778 4.35853 7.91599L11.6313 3.60127ZM5.45455 15.0323V9.83079L11.3939 13.3545V18.5559L5.45455 15.0323ZM12.3636 18.6998L18.5455 15.0323V9.83079L12.3687 13.4953C12.367 13.4963 12.3653 13.4973 12.3636 13.4983V18.6998ZM12 5.0845L17.8384 8.54827L12 12.012L6.1616 8.54827L12 5.0845Z"
            fill={color}
            stroke="none"
          />
        </>
      )}

      {name === 'users' && (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </>
      )}

      {name === 'spaces' && (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6958 3.58504C11.8836 3.47165 12.1164 3.47165 12.3042 3.58504L16.3842 6.04881C16.5675 6.15948 16.68 6.36144 16.68 6.57971V10.5173L20.7042 12.9474C20.8875 13.058 21 13.26 21 13.4783V17.4203C21 17.6386 20.8875 17.8405 20.7042 17.9512L16.6242 20.415C16.4364 20.5283 16.2036 20.5283 16.0158 20.415L12 17.99L7.98421 20.415C7.79644 20.5283 7.56356 20.5283 7.37579 20.415L3.29579 17.9512C3.11252 17.8405 3 17.6386 3 17.4203V13.4783C3 13.26 3.11252 13.058 3.29579 12.9474L7.32 10.5173V6.57971C7.32 6.36144 7.43252 6.15948 7.61579 6.04881L11.6958 3.58504ZM8.52 10.1695V7.51371L11.7566 9.4682L11.76 9.47022V12.126L8.52 10.1695ZM12.72 11.8361L15.48 10.1695V7.51371L12.72 9.18038V11.8361ZM12 4.83055L15.015 6.65117L12 8.4718L8.98505 6.65117L12 4.83055ZM12.84 14.4123V17.068L16.08 19.0245V16.3688L16.0766 16.3668L12.84 14.4123ZM19.8 17.068L17.04 18.7347V16.0789L19.8 14.4123V17.068ZM13.305 13.5497L16.32 15.3703L19.335 13.5497L16.32 11.7291L13.305 13.5497ZM4.2 17.068V14.4123L7.43663 16.3668L7.44 16.3688V19.0245L4.2 17.068ZM8.4 18.7347L11.16 17.068V14.4123L8.4 16.0789V18.7347ZM7.68 15.3703L4.66505 13.5497L7.68 11.7291L10.695 13.5497L7.68 15.3703Z"
            fill={color}
            stroke="none"
          />
        </>
      )}

      {name === 'space' && (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6313 3.60127C11.8589 3.46624 12.1411 3.46624 12.3687 3.60127L19.6415 7.91599C19.8636 8.04778 20 8.2883 20 8.54822V15.4518C20 15.7117 19.8636 15.9522 19.6415 16.084L12.3687 20.3987C12.1411 20.5338 11.8589 20.5338 11.6313 20.3987L4.35853 16.084C4.13639 15.9522 4 15.7117 4 15.4518V8.54822C4 8.2883 4.13639 8.04778 4.35853 7.91599L11.6313 3.60127ZM5.45455 15.0323V9.83079L11.3939 13.3545V18.5559L5.45455 15.0323ZM12.3636 18.6998L18.5455 15.0323V9.83079L12.3687 13.4953C12.367 13.4963 12.3653 13.4973 12.3636 13.4983V18.6998ZM12 5.0845L17.8384 8.54827L12 12.012L6.1616 8.54827L12 5.0845Z"
            fill={color}
            stroke="none"
          />
        </>
      )}

      {name === 'capacity' && (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.80464 5.5C6.10128 5.5 4.72044 6.87751 4.72044 8.57675C4.72044 9.73861 5.36601 10.7501 6.31883 11.2736C3.82814 11.9632 2 14.2416 2 16.9459C2 17.3522 2.33011 17.6815 2.73731 17.6815H9.43152C9.43116 17.7091 9.43098 17.7368 9.43098 17.7645C9.43098 18.1707 9.76108 18.5 10.1683 18.5H21.2627C21.6699 18.5 22 18.1707 22 17.7645C22 15.1644 20.4134 12.934 18.1533 11.9843C18.8149 11.3473 19.2264 10.4535 19.2264 9.46378C19.2264 7.52944 17.6545 5.96135 15.7155 5.96135C13.7765 5.96135 12.2046 7.52944 12.2046 9.46378C12.2046 10.4535 12.6161 11.3473 13.2777 11.9843C12.8208 12.1763 12.3914 12.4206 11.9971 12.7098C11.2701 12.01 10.3629 11.4943 9.35152 11.2391C10.2708 10.7065 10.8888 9.71362 10.8888 8.57675C10.8888 6.87751 9.508 5.5 7.80464 5.5ZM6.19507 8.57675C6.19507 7.68996 6.9157 6.97107 7.80464 6.97107C8.69359 6.97107 9.41422 7.68996 9.41422 8.57675C9.41422 9.46355 8.69359 10.1824 7.80464 10.1824C6.9157 10.1824 6.19507 9.46355 6.19507 8.57675ZM10.9174 13.7154C10.1263 12.9798 9.06594 12.5308 7.90047 12.5308C5.70736 12.5308 3.88681 14.1221 3.53577 16.2104H9.62556C9.86408 15.2774 10.3124 14.4281 10.9174 13.7154ZM13.6792 9.46378C13.6792 8.34189 14.5909 7.43242 15.7155 7.43242C16.8401 7.43242 17.7518 8.34189 17.7518 9.46378C17.7518 10.5857 16.8401 11.4951 15.7155 11.4951C14.5909 11.4951 13.6792 10.5857 13.6792 9.46378ZM10.9618 17.0289C11.3166 14.7281 13.3098 12.9662 15.7155 12.9662C18.1212 12.9662 20.1144 14.7281 20.4692 17.0289H10.9618Z"
            fill={color}
            stroke="none"
          />
        </>
      )}

      {name === 'code' && (
        <>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </>
      )}

      {name === 'menu' && (
        <>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </>
      )}

      {name === 'external-link' && (
        <>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </>
      )}

      {name === 'log-in' && (
        <>
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" y1="12" x2="3" y2="12"></line>
        </>
      )}

      {name === 'log-out' && (
        <>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </>
      )}

      {name === 'shield' && (
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </>
      )}

      {name === 'cross-device' && (
        <>
          <g>
            <path
              d="M19.5333 18.0154H19.5384M17.0061 9.92838H22.0606C22.6189 9.92838 23.0714 10.381 23.0714 10.9393V19.0263C23.0714 19.5846 22.6189 20.0372 22.0606 20.0372H17.0061C16.4478 20.0372 15.9953 19.5846 15.9953 19.0263V10.9393C15.9953 10.381 16.4478 9.92838 17.0061 9.92838Z"
              strokeWidth="1.67206"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              stroke="none"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.67206 5.69528C1.67206 5.14509 2.11807 4.69908 2.66826 4.69908H17.3261C17.8763 4.69908 18.3223 5.14509 18.3223 5.69528V8.41203H19.9943V5.69528C19.9943 4.22164 18.7997 3.02702 17.3261 3.02702H2.66826C1.19462 3.02702 0 4.22164 0 5.69528V14.8564C0 16.3301 1.19462 17.5247 2.66826 17.5247H9.16311V19.5171H6.33271C5.87099 19.5171 5.49668 19.8914 5.49668 20.3531C5.49668 20.8148 5.87099 21.1891 6.33271 21.1891H9.98877L9.99914 21.1892L10.0095 21.1891H13.6616C14.1233 21.1891 14.4976 20.8148 14.4976 20.3531C14.4976 19.8914 14.1233 19.5171 13.6616 19.5171H10.8352V17.5247H14.4832V15.8526H2.66826C2.11807 15.8526 1.67206 15.4066 1.67206 14.8564V5.69528Z"
              fill={color}
            />
          </g>
        </>
      )}

      {/*  

        
        // Todo finish breaking this up..
  
        
        <symbol id="codepen" viewBox="0 0 24 24">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
          <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
          <line x1="12" y1="2" x2="12" y2="8.5"></line>
        </symbol>
        <symbol id="codesandbox" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </symbol>
        <symbol id="coffee" viewBox="0 0 24 24">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </symbol>
        <symbol id="columns" viewBox="0 0 24 24">
          <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
        </symbol>
        <symbol id="command" viewBox="0 0 24 24">
          <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
        </symbol>
        <symbol id="compass" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
        </symbol>
        
        <symbol id="corner-down-left" viewBox="0 0 24 24">
          <polyline points="9 10 4 15 9 20"></polyline>
          <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
        </symbol>
        <symbol id="corner-down-right" viewBox="0 0 24 24">
          <polyline points="15 10 20 15 15 20"></polyline>
          <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
        </symbol>
        <symbol id="corner-left-down" viewBox="0 0 24 24">
          <polyline points="14 15 9 20 4 15"></polyline>
          <path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>
        </symbol>
        <symbol id="corner-left-up" viewBox="0 0 24 24">
          <polyline points="14 9 9 4 4 9"></polyline>
          <path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>
        </symbol>
        <symbol id="corner-right-down" viewBox="0 0 24 24">
          <polyline points="10 15 15 20 20 15"></polyline>
          <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
        </symbol>
        <symbol id="corner-right-up" viewBox="0 0 24 24">
          <polyline points="10 9 15 4 20 9"></polyline>
          <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
        </symbol>
        <symbol id="corner-up-left" viewBox="0 0 24 24">
          <polyline points="9 14 4 9 9 4"></polyline>
          <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
        </symbol>
        <symbol id="corner-up-right" viewBox="0 0 24 24">
          <polyline points="15 14 20 9 15 4"></polyline>
          <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
        </symbol>
        <symbol id="cpu" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
          <rect x="9" y="9" width="6" height="6"></rect>
          <line x1="9" y1="1" x2="9" y2="4"></line>
          <line x1="15" y1="1" x2="15" y2="4"></line>
          <line x1="9" y1="20" x2="9" y2="23"></line>
          <line x1="15" y1="20" x2="15" y2="23"></line>
          <line x1="20" y1="9" x2="23" y2="9"></line>
          <line x1="20" y1="14" x2="23" y2="14"></line>
          <line x1="1" y1="9" x2="4" y2="9"></line>
          <line x1="1" y1="14" x2="4" y2="14"></line>
        </symbol>
        
        <symbol id="crop" viewBox="0 0 24 24">
          <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path>
          <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>
        </symbol>
        <symbol id="crosshair" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="22" y1="12" x2="18" y2="12"></line>
          <line x1="6" y1="12" x2="2" y2="12"></line>
          <line x1="12" y1="6" x2="12" y2="2"></line>
          <line x1="12" y1="22" x2="12" y2="18"></line>
        </symbol>
        <symbol id="database" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </symbol>
        <symbol id="delete" viewBox="0 0 24 24">
          <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
          <line x1="18" y1="9" x2="12" y2="15"></line>
          <line x1="12" y1="9" x2="18" y2="15"></line>
        </symbol>
        <symbol id="disc" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </symbol>
        <symbol id="divide-circle" viewBox="0 0 24 24">
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <line x1="12" y1="16" x2="12" y2="16"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
          <circle cx="12" cy="12" r="10"></circle>
        </symbol>
        <symbol id="divide-square" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <line x1="12" y1="16" x2="12" y2="16"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </symbol>
        <symbol id="divide" viewBox="0 0 24 24">
          <circle cx="12" cy="6" r="2"></circle>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <circle cx="12" cy="18" r="2"></circle>
        </symbol>
        <symbol id="dollar-sign" viewBox="0 0 24 24">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </symbol>
        <symbol id="download-cloud" viewBox="0 0 24 24">
          <polyline points="8 17 12 21 16 17"></polyline>
          <line x1="12" y1="12" x2="12" y2="21"></line>
          <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
        </symbol>
        <symbol id="download" viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </symbol>
        <symbol id="dribbble" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
        </symbol>
        <symbol id="droplet" viewBox="0 0 24 24">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
        </symbol>
        <symbol id="edit-2" viewBox="0 0 24 24">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </symbol>
        <symbol id="edit-3" viewBox="0 0 24 24">
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </symbol>
        <symbol id="edit" viewBox="0 0 24 24">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </symbol>
       
        <symbol id="eye-off" viewBox="0 0 24 24">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </symbol>
        <symbol id="eye" viewBox="0 0 24 24">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </symbol>
        <symbol id="facebook" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </symbol>
        <symbol id="fast-forward" viewBox="0 0 24 24">
          <polygon points="13 19 22 12 13 5 13 19"></polygon>
          <polygon points="2 19 11 12 2 5 2 19"></polygon>
        </symbol>
        <symbol id="feather" viewBox="0 0 24 24">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </symbol>
        <symbol id="figma" viewBox="0 0 24 24">
          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
        </symbol>
        <symbol id="file-minus" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </symbol>
        <symbol id="file-plus" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </symbol>
        <symbol id="file-text" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </symbol>
        <symbol id="file" viewBox="0 0 24 24">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
          <polyline points="13 2 13 9 20 9"></polyline>
        </symbol>
        <symbol id="film" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
          <line x1="7" y1="2" x2="7" y2="22"></line>
          <line x1="17" y1="2" x2="17" y2="22"></line>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="2" y1="7" x2="7" y2="7"></line>
          <line x1="2" y1="17" x2="7" y2="17"></line>
          <line x1="17" y1="17" x2="22" y2="17"></line>
          <line x1="17" y1="7" x2="22" y2="7"></line>
        </symbol>
        <symbol id="filter" viewBox="0 0 24 24">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </symbol>
        <symbol id="flag" viewBox="0 0 24 24">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </symbol>
        <symbol id="folder-minus" viewBox="0 0 24 24">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          <line x1="9" y1="14" x2="15" y2="14"></line>
        </symbol>
        <symbol id="folder-plus" viewBox="0 0 24 24">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          <line x1="12" y1="11" x2="12" y2="17"></line>
          <line x1="9" y1="14" x2="15" y2="14"></line>
        </symbol>
        <symbol id="folder" viewBox="0 0 24 24">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </symbol>
        <symbol id="framer" viewBox="0 0 24 24">
          <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
        </symbol>
        <symbol id="frown" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </symbol>
        <symbol id="gift" viewBox="0 0 24 24">
          <polyline points="20 12 20 22 4 22 4 12"></polyline>
          <rect x="2" y="7" width="20" height="5"></rect>
          <line x1="12" y1="22" x2="12" y2="7"></line>
          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
        </symbol>
        <symbol id="git-branch" viewBox="0 0 24 24">
          <line x1="6" y1="3" x2="6" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 9a9 9 0 0 1-9 9"></path>
        </symbol>
        <symbol id="git-commit" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="1.05" y1="12" x2="7" y2="12"></line>
          <line x1="17.01" y1="12" x2="22.96" y2="12"></line>
        </symbol>
        <symbol id="git-merge" viewBox="0 0 24 24">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M6 21V9a9 9 0 0 0 9 9"></path>
        </symbol>
        <symbol id="git-pull-request" viewBox="0 0 24 24">
          <circle cx="18" cy="18" r="3"></circle>
          <circle cx="6" cy="6" r="3"></circle>
          <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
          <line x1="6" y1="9" x2="6" y2="21"></line>
        </symbol>
        <symbol id="github" viewBox="0 0 24 24">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </symbol>
        <symbol id="gitlab" viewBox="0 0 24 24">
          <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
        </symbol>
        <symbol id="globe" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </symbol>
        <symbol id="grid" viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </symbol>
        <symbol id="hard-drive" viewBox="0 0 24 24">
          <line x1="22" y1="12" x2="2" y2="12"></line>
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          <line x1="6" y1="16" x2="6.01" y2="16"></line>
          <line x1="10" y1="16" x2="10.01" y2="16"></line>
        </symbol>
        <symbol id="hash" viewBox="0 0 24 24">
          <line x1="4" y1="9" x2="20" y2="9"></line>
          <line x1="4" y1="15" x2="20" y2="15"></line>
          <line x1="10" y1="3" x2="8" y2="21"></line>
          <line x1="16" y1="3" x2="14" y2="21"></line>
        </symbol>
        <symbol id="headphones" viewBox="0 0 24 24">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </symbol>
        <symbol id="heart" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </symbol>
        <symbol id="help-circle" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </symbol>
        <symbol id="hexagon" viewBox="0 0 24 24">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </symbol>
        <symbol id="home" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </symbol>
        <symbol id="image" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </symbol>
        <symbol id="inbox" viewBox="0 0 24 24">
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        </symbol>
       
        <symbol id="instagram" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </symbol>
        <symbol id="italic" viewBox="0 0 24 24">
          <line x1="19" y1="4" x2="10" y2="4"></line>
          <line x1="14" y1="20" x2="5" y2="20"></line>
          <line x1="15" y1="4" x2="9" y2="20"></line>
        </symbol>
        <symbol id="key" viewBox="0 0 24 24">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
        </symbol>
        <symbol id="layers" viewBox="0 0 24 24">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </symbol>
        <symbol id="layout" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </symbol>
        <symbol id="life-buoy" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="4"></circle>
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
          <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
        </symbol>
        <symbol id="link-2" viewBox="0 0 24 24">
          <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </symbol>
        <symbol id="link" viewBox="0 0 24 24">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </symbol>
        <symbol id="linkedin" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </symbol>
        <symbol id="list" viewBox="0 0 24 24">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </symbol>
        <symbol id="loader" viewBox="0 0 24 24">
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
        </symbol>
        <symbol id="lock" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </symbol>
        <symbol id="log-in" viewBox="0 0 24 24">
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" y1="12" x2="3" y2="12"></line>
        </symbol>
        <symbol id="log-out" viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </symbol>
        <symbol id="mail" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </symbol>
        <symbol id="map-pin" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </symbol>
        <symbol id="map" viewBox="0 0 24 24">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </symbol>
        <symbol id="maximize-2" viewBox="0 0 24 24">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </symbol>
        <symbol id="maximize" viewBox="0 0 24 24">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </symbol>
        <symbol id="meh" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="15" x2="16" y2="15"></line>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </symbol>
        
        <symbol id="message-circle" viewBox="0 0 24 24">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </symbol>
        <symbol id="message-square" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </symbol>
        <symbol id="mic-off" viewBox="0 0 24 24">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </symbol>
        <symbol id="mic" viewBox="0 0 24 24">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </symbol>
        <symbol id="minimize-2" viewBox="0 0 24 24">
          <polyline points="4 14 10 14 10 20"></polyline>
          <polyline points="20 10 14 10 14 4"></polyline>
          <line x1="14" y1="10" x2="21" y2="3"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </symbol>
        <symbol id="minimize" viewBox="0 0 24 24">
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
        </symbol>
        <symbol id="minus-circle" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </symbol>
        <symbol id="minus-square" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </symbol>
        <symbol id="minus" viewBox="0 0 24 24">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </symbol>
        <symbol id="monitor" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </symbol>
        <symbol id="moon" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </symbol>
        <symbol id="more-horizontal" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </symbol>
        <symbol id="more-vertical" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </symbol>
        <symbol id="mouse-pointer" viewBox="0 0 24 24">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
          <path d="M13 13l6 6"></path>
        </symbol>
        <symbol id="move" viewBox="0 0 24 24">
          <polyline points="5 9 2 12 5 15"></polyline>
          <polyline points="9 5 12 2 15 5"></polyline>
          <polyline points="15 19 12 22 9 19"></polyline>
          <polyline points="19 9 22 12 19 15"></polyline>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </symbol>
        <symbol id="music" viewBox="0 0 24 24">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </symbol>
        <symbol id="navigation-2" viewBox="0 0 24 24">
          <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
        </symbol>
        <symbol id="navigation" viewBox="0 0 24 24">
          <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
        </symbol>
        <symbol id="octagon" viewBox="0 0 24 24">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
        </symbol>
        <symbol id="package" viewBox="0 0 24 24">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </symbol>
        <symbol id="paperclip" viewBox="0 0 24 24">
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
        </symbol>
        <symbol id="pause-circle" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="10" y1="15" x2="10" y2="9"></line>
          <line x1="14" y1="15" x2="14" y2="9"></line>
        </symbol>
        <symbol id="pause" viewBox="0 0 24 24">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </symbol>
        <symbol id="pen-tool" viewBox="0 0 24 24">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </symbol>
        <symbol id="percent" viewBox="0 0 24 24">
          <line x1="19" y1="5" x2="5" y2="19"></line>
          <circle cx="6.5" cy="6.5" r="2.5"></circle>
          <circle cx="17.5" cy="17.5" r="2.5"></circle>
        </symbol>
        <symbol id="phone-call" viewBox="0 0 24 24">
          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </symbol>
        <symbol id="phone-forwarded" viewBox="0 0 24 24">
          <polyline points="19 1 23 5 19 9"></polyline>
          <line x1="15" y1="5" x2="23" y2="5"></line>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </symbol>
        <symbol id="phone-incoming" viewBox="0 0 24 24">
          <polyline points="16 2 16 8 22 8"></polyline>
          <line x1="23" y1="1" x2="16" y2="8"></line>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </symbol>
        <symbol id="phone-missed" viewBox="0 0 24 24">
          <line x1="23" y1="1" x2="17" y2="7"></line>
          <line x1="17" y1="1" x2="23" y2="7"></line>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </symbol>
        <symbol id="phone-off" viewBox="0 0 24 24">
          <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path>
          <line x1="23" y1="1" x2="1" y2="23"></line>
        </symbol>
        <symbol id="phone-outgoing" viewBox="0 0 24 24">
          <polyline points="23 7 23 1 17 1"></polyline>
          <line x1="16" y1="8" x2="23" y2="1"></line>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </symbol>
        <symbol id="phone" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </symbol>
        <symbol id="pie-chart" viewBox="0 0 24 24">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
          <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
        </symbol>
        <symbol id="play-circle" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </symbol>
        <symbol id="play" viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </symbol>
       
        <symbol id="pocket" viewBox="0 0 24 24">
          <path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path>
          <polyline points="8 10 12 14 16 10"></polyline>
        </symbol>
        <symbol id="power" viewBox="0 0 24 24">
          <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
          <line x1="12" y1="2" x2="12" y2="12"></line>
        </symbol>
        <symbol id="printer" viewBox="0 0 24 24">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </symbol>
        <symbol id="radio" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2"></circle>
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
        </symbol>
        <symbol id="refresh-ccw" viewBox="0 0 24 24">
          <polyline points="1 4 1 10 7 10"></polyline>
          <polyline points="23 20 23 14 17 14"></polyline>
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
        </symbol>
        <symbol id="refresh-cw" viewBox="0 0 24 24">
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </symbol>
        <symbol id="repeat" viewBox="0 0 24 24">
          <polyline points="17 1 21 5 17 9"></polyline>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
          <polyline points="7 23 3 19 7 15"></polyline>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
        </symbol>
        <symbol id="rewind" viewBox="0 0 24 24">
          <polygon points="11 19 2 12 11 5 11 19"></polygon>
          <polygon points="22 19 13 12 22 5 22 19"></polygon>
        </symbol>
        <symbol id="rotate-ccw" viewBox="0 0 24 24">
          <polyline points="1 4 1 10 7 10"></polyline>
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
        </symbol>
        <symbol id="rotate-cw" viewBox="0 0 24 24">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </symbol>
        <symbol id="rss" viewBox="0 0 24 24">
          <path d="M4 11a9 9 0 0 1 9 9"></path>
          <path d="M4 4a16 16 0 0 1 16 16"></path>
          <circle cx="5" cy="19" r="1"></circle>
        </symbol>
        <symbol id="save" viewBox="0 0 24 24">
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
          <polyline points="17 21 17 13 7 13 7 21"></polyline>
          <polyline points="7 3 7 8 15 8"></polyline>
        </symbol>
        <symbol id="scissors" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
          <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
          <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
        </symbol>
        <symbol id="search" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </symbol>
        <symbol id="send" viewBox="0 0 24 24">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </symbol>
        <symbol id="server" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </symbol>
        
        <symbol id="share-2" viewBox="0 0 24 24">
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </symbol>
        <symbol id="share" viewBox="0 0 24 24">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
          <polyline points="16 6 12 2 8 6"></polyline>
          <line x1="12" y1="2" x2="12" y2="15"></line>
        </symbol>
        <symbol id="shield-off" viewBox="0 0 24 24">
          <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
          <path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </symbol>
        <symbol id="shield" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </symbol>
        <symbol id="shopping-bag" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </symbol>
        <symbol id="shopping-cart" viewBox="0 0 24 24">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </symbol>
        <symbol id="shuffle" viewBox="0 0 24 24">
          <polyline points="16 3 21 3 21 8"></polyline>
          <line x1="4" y1="20" x2="21" y2="3"></line>
          <polyline points="21 16 21 21 16 21"></polyline>
          <line x1="15" y1="15" x2="21" y2="21"></line>
          <line x1="4" y1="4" x2="9" y2="9"></line>
        </symbol>
        <symbol id="sidebar" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
        </symbol>
        <symbol id="skip-back" viewBox="0 0 24 24">
          <polygon points="19 20 9 12 19 4 19 20"></polygon>
          <line x1="5" y1="19" x2="5" y2="5"></line>
        </symbol>
        <symbol id="skip-forward" viewBox="0 0 24 24">
          <polygon points="5 4 15 12 5 20 5 4"></polygon>
          <line x1="19" y1="5" x2="19" y2="19"></line>
        </symbol>
        <symbol id="slack" viewBox="0 0 24 24">
          <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path>
          <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
          <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path>
          <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path>
          <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path>
          <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
          <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path>
          <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
        </symbol>
        <symbol id="slash" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
        </symbol>
        <symbol id="sliders" viewBox="0 0 24 24">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </symbol>
        <symbol id="smartphone" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </symbol>
        <symbol id="smile" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </symbol>
        <symbol id="speaker" viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <circle cx="12" cy="14" r="4"></circle>
          <line x1="12" y1="6" x2="12.01" y2="6"></line>
        </symbol>
        <symbol id="square" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </symbol>
        
        <symbol id="stop-circle" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <rect x="9" y="9" width="6" height="6"></rect>
        </symbol>
        <symbol id="sun" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </symbol>
        <symbol id="sunrise" viewBox="0 0 24 24">
          <path d="M17 18a5 5 0 0 0-10 0"></path>
          <line x1="12" y1="2" x2="12" y2="9"></line>
          <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
          <line x1="1" y1="18" x2="3" y2="18"></line>
          <line x1="21" y1="18" x2="23" y2="18"></line>
          <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
          <line x1="23" y1="22" x2="1" y2="22"></line>
          <polyline points="8 6 12 2 16 6"></polyline>
        </symbol>
        <symbol id="sunset" viewBox="0 0 24 24">
          <path d="M17 18a5 5 0 0 0-10 0"></path>
          <line x1="12" y1="9" x2="12" y2="2"></line>
          <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
          <line x1="1" y1="18" x2="3" y2="18"></line>
          <line x1="21" y1="18" x2="23" y2="18"></line>
          <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
          <line x1="23" y1="22" x2="1" y2="22"></line>
          <polyline points="16 5 12 9 8 5"></polyline>
        </symbol>
        <symbol id="table" viewBox="0 0 24 24">
          <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
        </symbol>
        <symbol id="tablet" viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </symbol>
        <symbol id="tag" viewBox="0 0 24 24">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
          <line x1="7" y1="7" x2="7.01" y2="7"></line>
        </symbol>
        <symbol id="target" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </symbol>
        <symbol id="terminal" viewBox="0 0 24 24">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </symbol>
        <symbol id="thermometer" viewBox="0 0 24 24">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
        </symbol>
        <symbol id="thumbs-down" viewBox="0 0 24 24">
          <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
        </symbol>
        <symbol id="thumbs-up" viewBox="0 0 24 24">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
        </symbol>
        <symbol id="toggle-left" viewBox="0 0 24 24">
          <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
          <circle cx="8" cy="12" r="3"></circle>
        </symbol>
        <symbol id="toggle-right" viewBox="0 0 24 24">
          <rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
          <circle cx="16" cy="12" r="3"></circle>
        </symbol>
        <symbol id="tool" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </symbol>
        <symbol id="trash-2" viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </symbol>
        <symbol id="trash" viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </symbol>
        <symbol id="trello" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <rect x="7" y="7" width="3" height="9"></rect>
          <rect x="14" y="7" width="3" height="5"></rect>
        </symbol>
        <symbol id="trending-down" viewBox="0 0 24 24">
          <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
          <polyline points="17 18 23 18 23 12"></polyline>
        </symbol>
        <symbol id="trending-up" viewBox="0 0 24 24">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </symbol>
        <symbol id="triangle" viewBox="0 0 24 24">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        </symbol>
        <symbol id="truck" viewBox="0 0 24 24">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </symbol>
        <symbol id="tv" viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
          <polyline points="17 2 12 7 7 2"></polyline>
        </symbol>
        <symbol id="twitch" viewBox="0 0 24 24">
          <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
        </symbol>
        <symbol id="twitter" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </symbol>
        <symbol id="type" viewBox="0 0 24 24">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </symbol>
        <symbol id="umbrella" viewBox="0 0 24 24">
          <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
        </symbol>
        <symbol id="underline" viewBox="0 0 24 24">
          <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
          <line x1="4" y1="21" x2="20" y2="21"></line>
        </symbol>
        <symbol id="unlock" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
        </symbol>
        <symbol id="upload-cloud" viewBox="0 0 24 24">
          <polyline points="16 16 12 12 8 16"></polyline>
          <line x1="12" y1="12" x2="12" y2="21"></line>
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
          <polyline points="16 16 12 12 8 16"></polyline>
        </symbol>
        <symbol id="upload" viewBox="0 0 24 24">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </symbol>
        <symbol id="user-check" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <polyline points="17 11 19 13 23 9"></polyline>
        </symbol>
        <symbol id="user-minus" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </symbol>
        <symbol id="user-plus" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </symbol>
        <symbol id="user-x" viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="18" y1="8" x2="23" y2="13"></line>
          <line x1="23" y1="8" x2="18" y2="13"></line>
        </symbol>
        <symbol id="user" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </symbol>
      
        <symbol id="video-off" viewBox="0 0 24 24">
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </symbol>
        <symbol id="video" viewBox="0 0 24 24">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </symbol>
        <symbol id="voicemail" viewBox="0 0 24 24">
          <circle cx="5.5" cy="11.5" r="4.5"></circle>
          <circle cx="18.5" cy="11.5" r="4.5"></circle>
          <line x1="5.5" y1="16" x2="18.5" y2="16"></line>
        </symbol>
        <symbol id="volume-1" viewBox="0 0 24 24">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </symbol>
        <symbol id="volume-2" viewBox="0 0 24 24">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </symbol>
        <symbol id="volume-x" viewBox="0 0 24 24">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </symbol>
        <symbol id="volume" viewBox="0 0 24 24">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        </symbol>
        <symbol id="watch" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7"></circle>
          <polyline points="12 9 12 12 13.5 13.5"></polyline>
          <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
        </symbol>
        <symbol id="wifi-off" viewBox="0 0 24 24">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
          <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
          <line x1="12" y1="20" x2="12.01" y2="20"></line>
        </symbol>
        <symbol id="wifi" viewBox="0 0 24 24">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
          <line x1="12" y1="20" x2="12.01" y2="20"></line>
        </symbol>
        <symbol id="wind" viewBox="0 0 24 24">
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
        </symbol>
        
        <symbol id="youtube" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </symbol>
        <symbol id="zap-off" viewBox="0 0 24 24">
          <polyline points="12.41 6.75 13 2 10.57 4.92"></polyline>
          <polyline points="18.57 12.91 21 10 15.66 10"></polyline>
          <polyline points="8 8 3 14 12 14 11 22 16 16"></polyline>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </symbol>
        <symbol id="zap" viewBox="0 0 24 24">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </symbol>
        <symbol id="zoom-in" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="11" y1="8" x2="11" y2="14"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </symbol>
        <symbol id="zoom-out" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </symbol>  */}
    </svg>
  );
};

export default Icon;
