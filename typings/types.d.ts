export declare enum NodeType {
    Document = 0,
    DocumentType = 1,
    Element = 2,
    Text = 3,
    CDATA = 4,
    Comment = 5
}
export declare type documentNode = {
    type: NodeType.Document;
    childNodes: serializedNodeWithId[];
};
export declare type documentTypeNode = {
    type: NodeType.DocumentType;
    name: string;
    publicId: string;
    systemId: string;
};
export declare type attributes = {
    [key: string]: string | boolean;
};
export declare type elementNode = {
    type: NodeType.Element;
    tagName: string;
    attributes: attributes;
    childNodes: serializedNodeWithId[];
    isSVG?: true;
    needBlock?: boolean;
};
export declare type textNode = {
    type: NodeType.Text;
    textContent: string;
    isStyle?: true;
};
export declare type cdataNode = {
    type: NodeType.CDATA;
    textContent: '';
};
export declare type commentNode = {
    type: NodeType.Comment;
    textContent: string;
};
export declare type serializedNode = (documentNode | documentTypeNode | elementNode | textNode | cdataNode | commentNode) & {
    rootId?: number;
};
export declare type serializedNodeWithId = serializedNode & {
    id: number;
};
export declare type tagMap = {
    [key: string]: string;
};
export interface INode extends Node {
    __sn: serializedNodeWithId;
}
export declare type idNodeMap = {
    [key: number]: INode;
};
export declare type callbackArray<T = Function> = T[];
export declare type snapshotOptions = {
    blockClass?: string;
    onVisit?: (n: INode) => void;
};
export declare type serializeOptions = snapshotOptions & {
    skipChild?: boolean;
};
